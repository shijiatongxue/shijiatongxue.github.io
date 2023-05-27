import * as Pages from '../pages';

const MENUS = [
    {
        path: '/',
        text: 'Books',
        disabled: false,
        component: Pages.Books
    },
    {
        path: '/photos',
        text: 'Photos',
        disabled: false,
        component: Pages.Home
    },
    {
        path: '/projects',
        text: 'Projects',
        disabled: false,
        component: Pages.Projects
    },
    // {
    //     path: '/about',
    //     text: 'About',
    //     disabled: true,
    //     component: Pages.About
    // }
];

export {
    MENUS
};