import { Route, Routes } from 'react-router-dom';
import { MENUS } from '../const/menus';

export default function Router() {
    return (
        <Routes>
            {
                MENUS.map(menu => (
                    <Route key={menu.path} path={menu.path} element={<menu.component />}>
                    </Route>
                ))
            }
        </Routes>
    );
}