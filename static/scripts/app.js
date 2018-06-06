'use strict';

function Utils(){
	return {
		hash: function(input) {
			var hash = 0, i, chr;
			if (input.length === 0) return hash;
			for (i = 0; i < input.length; i++) {
				chr   = input.charCodeAt(i);
				hash  = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			}
			return hash.toString();
		}		
	};
}
	
function App(viewport, data){		
	var renderer = new PIXI.WebGLRenderer(
		1680,
		1050,
		{
		  view: viewport,
		},
	);
	
	var stage = new PIXI.Container();
	var container = new PIXI.Container();
	var foreground = new PIXI.Container();
	
	var ploader = new PIXI.loaders.Loader();
	var sprite = {};
	var depth = {};
	var filter = {};
	
	var dampening = 0.16;
	var mobileDampening = 1;
	
	var keys = [];
	var utils = new Utils();
		
	var render = function() {
			sprite.addChild(depth);
			depth.renderable = false;

			renderer.render(stage);
		};
		
	var handleMouseMove = function() {
			if(filter && filter.scale){
				filter.scale.x = ((window.innerWidth / 2) - (event.x ? event.x : event.clientX)) * dampening;
				filter.scale.y = ((window.innerHeight / 2) - (event.y ? event.y : event.clientY)) * dampening;
				requestAnimationFrame(render);
			}
		};
		
	var handleDeviceOrientation = function(event) {
			if(filter && filter.scale){
				filter.scale.x = -event.beta * mobileDampening;
				filter.scale.y = -event.gamma * mobileDampening;
				requestAnimationFrame(render);
			}
		}
	
	stage.addChild(container);
	stage.addChild(foreground);

	var instance = {
		init: function() {
			window.addEventListener('deviceorientation', handleDeviceOrientation, true);
			document.addEventListener('mousemove', handleMouseMove, true);
			
			var current = 0;
			
			for(; current < data.length; current++){
				keys.push({ 
					textureKey: utils.hash(data[current].texture),
					dmapKey: utils.hash(data[current].dmap)
				});
				ploader.add(keys[current].textureKey, data[current].texture);
				ploader.add(keys[current].dmapKey, data[current].dmap);
			}
			ploader.once('complete', this.start);
			ploader.load();
		},
		start: function() {
			var index = keys[0];
			var fgImage = ploader.resources[index.textureKey].texture.baseTexture;
			var depthImage = ploader.resources[index.dmapKey].texture.baseTexture;
			var viewportWidth = viewport.width;
			var viewportHeight = viewport.height;

			sprite = new PIXI.Sprite(ploader.resources[index.textureKey].texture);
			
			sprite.blendMode = PIXI.BLEND_MODES.SCREEN;

			sprite.scale.x = viewportWidth / fgImage.realWidth;
			sprite.scale.y = viewportHeight / fgImage.realHeight;

			foreground.addChild(sprite);

			depth = new PIXI.Sprite(ploader.resources[index.dmapKey].texture);

			depth.scale.x = viewportWidth / depthImage.realWidth;
			depth.scale.y = viewportHeight / depthImage.realHeight;

			filter = new PIXI.filters.DisplacementFilter(depth, 0);
			sprite.filters = [filter];
			
			render();
		},
		destroy: function() {
			window.removeEventListener('deviceorientation', handleDeviceOrientation, true);
			document.removeEventListener('mousemove', handleMouseMove);
			filter.destroy();
			depth.destroy();
			sprite.destroy();
			ploader.destroy();
			foreground.destroy();
			stage.destroy();
			renderer.destroy();
		}
	};
	return instance;
}