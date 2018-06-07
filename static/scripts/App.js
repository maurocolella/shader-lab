import hash from 'object-hash';
import OldFilmFilter from './OldFilmFilter';

function App(viewport, data){
  let renderer = new PIXI.WebGLRenderer(
    1680,
    1050,
    {
      view: viewport,
      // resolution: window.devicePixelRatio
    },
  );

  const stage = new PIXI.Container();
  const container = new PIXI.Container();
  const foreground = new PIXI.Container();

  const ploader = new PIXI.loaders.Loader();
  let sprites = [];
  let depthMaps = [];
  let filters = [];
  let frameCounter = 0;

  const oldFilm = new OldFilmFilter({
            sepia: 0.1,
            noise: 0.05,
            noiseSize: 0.1,
            scratch: 0.5,
            scratchDensity: 0.2,
            scratchWidth: 0.9,
            vignetting: 0.5,
            vignettingAlpha: 0.5,
            vignettingBlur: 0.4,
        });

  stage.filters = [oldFilm];

  let activeSlide = 0;
  let dampening = 0.16;
  let mobileDampening = 1;

  let keys = [];

  stage.addChild(container);
  stage.addChild(foreground);

  let render = function() {
    renderer.render(stage);
    frameCounter++;
    frameCounter %= 2;
    if(frameCounter === 0){
      oldFilm.seed = Math.random();
    }
    requestAnimationFrame(render);
  };

  let handleResize = function() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let ratio = Math.max(windowWidth / 1680, windowHeight / 1050);
    stage.scale.set(ratio, ratio);
    stage.position.x = (windowWidth - 1680 * ratio) >> 1;
    stage.position.y = (windowHeight - 1050 * ratio) >> 1;
    renderer.resize(windowWidth, windowHeight);
  };

  let handleClick = function() {
    activeSlide++;
    activeSlide %= data.length;
    let current = 0;
    for(; current < data.length; current++){
      sprites[current].renderable = current === activeSlide;
    }
  }

  let handleMouseMove = function() {
    if(filters[activeSlide] && filters[activeSlide].scale){
      filters[activeSlide].scale.x = ((window.innerWidth / 2) - (event.x ? event.x : event.clientX)) * dampening;
      filters[activeSlide].scale.y = ((window.innerHeight / 2) - (event.y ? event.y : event.clientY)) * dampening;
    }
  };

  let handleDeviceOrientation = function(event) {
    if(filters[activeSlide] && filters[activeSlide].scale){
      filters[activeSlide].scale.x = -event.beta * mobileDampening;
      filters[activeSlide].scale.y = -event.gamma * mobileDampening;
    }
  };

  let instance = {
    init: function() {
      window.addEventListener('resize', handleResize, true);
      window.addEventListener('deviceorientation', handleDeviceOrientation, true);
      document.addEventListener('mousemove', handleMouseMove, true);
      document.addEventListener('click', handleClick, true);

      let current = 0;

      for(; current < data.length; current++){
        keys.push({
          textureKey: hash(data[current].texture),
          dmapKey: hash(data[current].dmap)
        });
        ploader.add(keys[current].textureKey, data[current].texture);
        ploader.add(keys[current].dmapKey, data[current].dmap);
      }
      ploader.on('progress', function (loader, res) {
        // you can access the loader from the arguments
        // it has a progress letiable that represents your progress
        // as a percentage
        console.log(loader.progress);
      })
      ploader.once('complete', this.start);
      ploader.load();
    },
    start: function() {
      let current = 0,
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

      handleResize();
      requestAnimationFrame(render);
    },
    destroy: function() {
      window.removeEventListener('resize', handleResize, true);
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

export default App;
