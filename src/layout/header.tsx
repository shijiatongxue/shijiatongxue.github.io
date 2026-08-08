import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SideSheet, Typography } from '@douyinfe/semi-ui';
import { IconSun, IconMoon, IconGithubLogo, IconListView } from '@douyinfe/semi-icons';

import '../styles/header.scss';
import { MENUS } from '../const/menus';
import { useLanguage } from '../common/i18n';

const { Text } = Typography;

const GITHUB_URL = 'https://github.com/shijiatongxue';

function getMenuLabel(path: string, t: (key: string) => string) {
  if (path === '/') return t('nav.home');
  if (path === '/blogs') return t('nav.blogs');
  if (path === '/projects') return t('nav.projects');
  return path;
}

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    const storedMode = window.localStorage.getItem('theme-mode');
    if (storedMode === 'dark' || storedMode === 'light') {
      return storedMode;
    }
    return document.body.hasAttribute('theme-mode') ? 'dark' : 'light';
  });
  const [visible, setVisible] = useState(false);

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
  };

  useEffect(() => {
    const body = document.body;
    const storedMode = window.localStorage.getItem('theme-mode');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyMode = (nextMode: 'dark' | 'light') => {
      if (nextMode === 'dark') {
        body.setAttribute('theme-mode', 'dark');
      } else {
        body.removeAttribute('theme-mode');
      }
      setMode(nextMode);
    };

    if (storedMode === 'dark' || storedMode === 'light') {
      applyMode(storedMode);
    } else {
      applyMode(mediaQuery.matches ? 'dark' : 'light');
    }

    const handleSystemModeChange = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem('theme-mode')) {
        applyMode(event.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener?.('change', handleSystemModeChange);
    return () => mediaQuery.removeEventListener?.('change', handleSystemModeChange);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <Link className="logo" title={t('header.home')} to="/">
          <span className="logo-mark">SJ</span>
          <span className="logo-copy">
            <strong>Shi Jia</strong>
            <small>{t('header.role')}</small>
          </span>
        </Link>

        <nav className="nav" aria-label={t('nav.aria')}>
          {MENUS.map((menu) => {
            const label = getMenuLabel(menu.path, t);
            return menu.disabled ? (
              <span key={menu.text} className="disabled">
                {label}
              </span>
            ) : (
              <NavLink
                title={label}
                key={menu.path}
                to={menu.path}
                end={menu.path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={t('header.language')}
          >
            <span className={language === 'zh' ? 'active' : ''}>中</span>
            <span className="language-divider">/</span>
            <span className={language === 'en' ? 'active' : ''}>EN</span>
          </button>
          <button
            type="button"
            className="header-icon-button"
            onClick={switchMode}
            aria-label={mode === 'dark' ? t('header.light') : t('header.dark')}
          >
            {mode === 'dark' ? <IconMoon size="large" /> : <IconSun size="large" />}
          </button>
          <a
            className="header-icon-button github-button"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={t('header.github')}
          >
            <IconGithubLogo size="large" />
          </a>
          <button
            type="button"
            className="header-icon-button show-mobile-nav"
            onClick={() => setVisible(true)}
            aria-label={t('header.menu')}
          >
            <IconListView size="large" />
          </button>
        </div>
      </div>

      <SideSheet
        className="mobile-nav"
        width={260}
        closable
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <div className="mobile-nav-heading">{t('nav.navigate')}</div>
        {MENUS.map((menu) => {
          const label = getMenuLabel(menu.path, t);
          return (
            <div key={menu.text} className="mobile-nav-item" onClick={() => setVisible(false)}>
              {menu.disabled ? (
                <Text title={label} disabled>
                  {label}
                </Text>
              ) : (
                <Link to={menu.path}>
                  <Text title={label}>{label}</Text>
                </Link>
              )}
            </div>
          );
        })}
      </SideSheet>
    </header>
  );
}
