import { Route, Routes } from 'react-router-dom';
import { MENUS } from '../const/menus';
import NoMatch from '../pages/noMatch';

export default function Router() {
    return (
        <Routes>
            {
                MENUS.map(menu => (
                    <Route key={menu.path} path={menu.path} element={<menu.component />}>
                    </Route>
                ))
            }
            <Route key="404" path="*" element={<NoMatch />}>
            </Route>
        </Routes>
    );
}