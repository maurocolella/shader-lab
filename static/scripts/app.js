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
	var sprites = [];
	var depthMaps = [];
	var filters = [];
	
	var activeSlide = 0;
	var dampening = 0.16;
	var mobileDampening = 1;
	
	var keys = [];
	var utils = new Utils();
		
	var render = function() {
			renderer.render(stage);
		};
		
	var handleClick = function() {
		activeSlide++;
		activeSlide %= data.length;
		var current = 0;
		for(; current < data.length; current++){
			sprites[current].renderable = current === activeSlide;
		}
		requestAnimationFrame(render);
	}
		
	var handleMouseMove = function() {
			if(filters[activeSlide] && filters[activeSlide].scale){
				filters[activeSlide].scale.x = ((window.innerWidth / 2) - (event.x ? event.x : event.clientX)) * dampening;
				filters[activeSlide].scale.y = ((window.innerHeight / 2) - (event.y ? event.y : event.clientY)) * dampening;
				requestAnimationFrame(render);
			}
		};
		
	var handleDeviceOrientation = function(event) {
			if(filters[activeSlide] && filters[activeSlide].scale){
				filters[activeSlide].scale.x = -event.beta * mobileDampening;
				filters[activeSlide].scale.y = -event.gamma * mobileDampening;
				requestAnimationFrame(render);
			}
		}
	
	stage.addChild(container);
	stage.addChild(foreground);

	var instance = {
		init: function() {
			window.addEventListener('deviceorientation', handleDeviceOrientation, true);
			document.addEventListener('mousemove', handleMouseMove, true);
			document.addEventListener('click', handleClick, true);
			
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
			var current = 0,
				index,
				fgImage,
				depthImage,
				viewportWidth,
				viewportHeight;
			
			for(; current < data.length; current++){
				index = keys[current];
				fgImage = ploader.resources[index.textureKey].texture.baseTexture;
				depthImage = ploader.resources[index.dmapKey].texture.baseTexture;
				viewportWidth = viewport.width;
				viewportHeight = viewport.height;

				sprites[current] = new PIXI.Sprite(ploader.resources[index.textureKey].texture);
				sprites[current].blendMode = PIXI.BLEND_MODES.SCREEN;

				sprites[current].scale.x = viewportWidth / fgImage.realWidth;
				sprites[current].scale.y = viewportHeight / fgImage.realHeight;

				foreground.addChild(sprites[current]);

				depthMaps[current] = new PIXI.Sprite(ploader.resources[index.dmapKey].texture);

				depthMaps[current].scale.x = viewportWidth / depthImage.realWidth;
				depthMaps[current].scale.y = viewportHeight / depthImage.realHeight;

				filters[current] = new PIXI.filters.DisplacementFilter(depthMaps[current], 0);
				sprites[current].filters = [filters[current]];
				
				sprites[current].addChild(depthMaps[current]);
				depthMaps[current].renderable = false;
			}
			
			render();
		},
		destroy: function() {
			window.removeEventListener('deviceorientation', handleDeviceOrientation, true);
			document.removeEventListener('mousemove', handleMouseMove, true);
			document.removeEventListener('click', handleClick, true);
			// filter.destroy();
			// depth.destroy();
			// sprite.destroy();
			ploader.destroy();
			foreground.destroy();
			stage.destroy();
			renderer.destroy();
		}
	};
	return instance;
}