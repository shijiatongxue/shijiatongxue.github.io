import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import Main from './main';
// import Footer from './footer';

export default function Layout() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            {/* <Footer /> */}
        </BrowserRouter>
    );
}