import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Space, SideSheet, Typography } from "@douyinfe/semi-ui";
import {
  IconSun,
  IconMoon,
  IconGithubLogo,
  IconListView,
} from "@douyinfe/semi-icons";

import "../styles/header.scss";
import { MENUS } from "../const/menus";

const { Text } = Typography;

export default function Header() {
  const isDarkMode = document.body.hasAttribute("theme-mode");
  const [mode, setMode] = useState(isDarkMode ? "dark" : "light");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const switchMode = () => {
    const body = document.body;
    console.log('set mode');
    if (body.hasAttribute("theme-mode")) {
      body.removeAttribute("theme-mode");
      setMode("light");
      window.localStorage.setItem("theme-mode", "light");
    } else {
      body.setAttribute("theme-mode", "dark");
      setMode("dark");
      window.localStorage.setItem("theme-mode", "dark");
    }
  };

  const matchMode = (e: any) => {
    const body = document.body;
    if (e.matches) {
      if (!body.hasAttribute("theme-mode")) {
        body.setAttribute("theme-mode", "dark");
        setMode("dark");
        window.localStorage.setItem("theme-mode", "dark");
      }
    } else {
      if (body.hasAttribute("theme-mode")) {
        body.removeAttribute("theme-mode");
        setMode("light");
        window.localStorage.setItem("theme-mode", "light");
      }
    }
  };

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addListener(matchMode);

  const iconStyle = {
    size: "large" as const,
  };

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const themeMode = window.localStorage.getItem("theme-mode");
    themeMode && setMode(themeMode);
    if (themeMode === "dark") {
      document.body.setAttribute("theme-mode", "dark");
    }
  }, []);

  return (
    <header className="header">
      <div className="logo" onClick={handleGoHome}>石嘉同学</div>
      <div className="nav">
        {MENUS.map((menu, index) =>
          menu.disabled ? (
            <div key={menu.text} className="disabled">
              {menu.text}
            </div>
          ) : (
            <Link key={menu.path} to={menu.path}>
              <div>{menu.text}</div>
            </Link>
          )
        )}
      </div>
      <Space className="theme">
        <Button
          theme="borderless"
          onClick={switchMode}
          style={{ color: "#fff" }}
          icon={
            mode === "dark" ? (
              <IconMoon {...iconStyle} />
            ) : (
              <IconSun {...iconStyle} />
            )
          }
        />
        <Button
          theme="borderless"
          style={{ color: "#fff" }}
          onClick={() => {
            window.open("https://github.com/shijiatongxue", "__blank");
          }}
          icon={<IconGithubLogo {...iconStyle} />}
        />
        <IconListView className="show-mobile-nav" onClick={() => setVisible(true)} />
      </Space>
      <SideSheet
        className="mobile-nav"
        width={150}
        height={300}
        closable={false}
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        {MENUS.map((menu, index) => (
          <div onClick={() => setVisible(false)}>
            {menu.disabled ? (
              <Text key={menu.text} disabled style={{ height: 32, lineHeight: '32px' }}>
                {menu.text}
              </Text>
            ) : (
              <Link key={menu.path} to={menu.path}>
                <Text style={{ height: 32, lineHeight: '32px' }}>{menu.text}</Text>
              </Link>
            )}
          </div>
        ))}
      </SideSheet>
    </header>
  );
}
