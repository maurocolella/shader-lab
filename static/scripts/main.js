import App from './App';

const data = [
  {texture: 'static/images/on-the-clouds.jpg', dmap:  'static/images/cloud-dm.jpg'},
  {texture: 'static/images/surf.jpg', dmap:  'static/images/surf-dm.jpg'},
  // {texture: 'static/images/lips.jpg', dmap:  'static/images/lips-dm.jpg'}
];
const app = new App(document.getElementById('viewport'), data);
app.init();
