import * as Pages from '../pages';

const MENUS = [
  {
    path: '/',
    text: 'Home',
    disabled: false,
    component: Pages.Home,
  },
  // {
  //     path: '/photos',
  //     text: 'Photos',
  //     disabled: false,
  //     component: Pages.Home
  // },
  {
    path: '/blogs',
    text: 'Blogs',
    disabled: false,
    component: Pages.Blogs,
  },
  {
    path: '/projects',
    text: 'Projects',
    disabled: false,
    component: Pages.Projects,
  },
  // {
  //     path: '/about',
  //     text: 'About',
  //     disabled: true,
  //     component: Pages.About
  // }
];

export { MENUS };
