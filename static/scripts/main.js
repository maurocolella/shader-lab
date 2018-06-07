import App from './App';

const data = [
  {texture: 'static/images/on-the-clouds.jpg', dmap:  'static/images/cloud-dm.jpg'},
];
const app = new App(document.getElementById('viewport'), data);
app.init();
