import "antd/dist/antd.css";
import { Layout } from "antd";
import React from "react";

import AntMenu from "./components/Menu";
import AntHeader from "./components/AntHeader";
import AntSider from "./components/AntSider";
import AntFooter from "./components/AntFooter";
import AntRoutes from "./routes/Routes";
import AntContent from "./components/AntContent";
import MainPosts from "./components/MainPosts";

const App = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <AntHeader />
      <Layout className="site-layout">
        <AntSider children={<AntMenu />}></AntSider>
        <AntContent
          routes={<AntRoutes />}
          footer={<AntFooter />}
          posts={<MainPosts />}
        />
      </Layout>
    </Layout>
  );
};

export default App;
