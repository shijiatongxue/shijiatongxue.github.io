import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import Main from './main';
import Footer from './footer';
import { LanguageProvider } from '../common/i18n';

export default function Layout() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </LanguageProvider>
    );
}
