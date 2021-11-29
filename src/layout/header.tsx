import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@douyinfe/semi-ui';
import { IconSun, IconMoon, IconGithubLogo } from '@douyinfe/semi-icons';

import '../styles/header.scss';
import { MENUS } from 'const/menus';

export default function Header() {
    const isDarkMode = document.body.hasAttribute('theme-mode');
    const [mode, setMode] = useState(isDarkMode ? 'dark' : 'light');

    const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
            setMode('light');
            window.localStorage.setItem('theme-mode', 'light');
        } else {
            body.setAttribute('theme-mode', 'dark');
            setMode('dark');
            window.localStorage.setItem('theme-mode', 'dark');
        }
    }

    const matchMode = (e: any) => {
        const body = document.body;
        if (e.matches) {
            if (!body.hasAttribute('theme-mode')) {
                body.setAttribute('theme-mode', 'dark');
                setMode('dark');
                window.localStorage.setItem('theme-mode', 'dark');
            }
        } else {
            if (body.hasAttribute('theme-mode')) {
                body.removeAttribute('theme-mode');
                setMode('light');
                window.localStorage.setItem('theme-mode', 'light');
            }
        }
    };

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addListener(matchMode);

    const iconStyle = {
        size: 'large' as const,
    };

    useEffect(() => {
        const themeMode = window.localStorage.getItem('theme-mode');
        themeMode && setMode(themeMode);
        if (themeMode === 'dark') {
            document.body.setAttribute('theme-mode', 'dark');
        } else {
            document.body.setAttribute('theme-mode', 'light');
        }
    }, []);

    return (
        <header className="header">
            <div className="logo">石嘉同学</div>
            <div className="nav">
                {
                    MENUS.map((menu, index) => menu.disabled ? <div key={menu.text} className="disabled">{menu.text}</div> : <Link key={menu.path} to={menu.path}><div>{menu.text}</div></Link>)
                }
            </div>
            <div className="theme">
                <Button
                    theme='borderless'
                    onClick={switchMode}
                    style={{ color: '#fff' }}
                    icon={mode === 'dark' ? <IconMoon {...iconStyle} /> : <IconSun {...iconStyle} />}
                />
                <Button
                    theme='borderless'
                    style={{ color: '#fff' }}
                    onClick={() => { window.open('https://github.com/shijiatongxue', '__blank')}}
                    icon={<IconGithubLogo {...iconStyle} />}
                />
            </div>
        </header>
    );
}