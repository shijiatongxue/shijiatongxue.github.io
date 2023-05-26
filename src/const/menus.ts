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
        path: '/blogs',
        text: 'Blogs',
        disabled: true,
        component: Pages.Blogs
    },
    {
        path: '/about',
        text: 'About',
        disabled: true,
        component: Pages.About
    }
];

export {
    MENUS
};