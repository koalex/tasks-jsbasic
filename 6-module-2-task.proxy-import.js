import './6-module/2-task/src/index.js';

const menuItems = [
  {
    id: 'cameraphotos',
    title: 'Camera & Photo',
    submenu: [
      {
        id: 'cameraphotos_accessories',
        title: 'Accessories'
      }
    ]
  },
  {
    id: 'cinema',
    title: 'Home Cinema, TV & Video',
    submenu: [
      {
        id: 'cinema_audio',
        title: 'Audio'
      },
      {
        id: 'cinema_video',
        title: 'Video'
      }
    ]
  }
];

new Menu(document.querySelector('.main-menu'), menuItems);
