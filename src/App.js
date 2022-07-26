import "antd/dist/antd.css";
import { Layout } from "antd";
import React, { useState } from "react";

import AntMenu from "./components/Menu";
import Messenges from "./pages/Messenges";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import css from "./styles/header.module.css";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header className={css.header}>
        <div className={css.header_menu}>
          <div className="underline-offset-1">ЛОГО</div>
          <div>Какой нибудь поиск</div>
          <div>Профиль</div>
        </div>
      </Header>

      <Layout className="site-layout">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <AntMenu />
        </Sider>
        <Content
          style={{
            margin: "0 16px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Routes>
              <Route path="/main" element={<Main />}></Route>
              <Route path="/messenges" element={<Messenges />}></Route>
            </Routes>
          </div>
          <Footer>Hello</Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
