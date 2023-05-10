import { useState } from "react";
import style from "./index.module.scss";
import { Layout, theme } from "antd";
import {Outlet } from "react-router-dom";
import SiderMenu from '@/conponents/SiderMenu'
const { Content, Footer, Header, Sider } = Layout;
export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const fullYear = new Date().getFullYear();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
       <SiderMenu></SiderMenu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className={style["ant-layout-header"]}
          style={{ padding: 0, background: colorBgContainer }}
        ></Header>
        <Content className={style["content"]}>
          {/* 路由出口 */}
          <Outlet></Outlet>
        </Content>
        <Footer className={style["ant-layout-footer"]}>
          React Template Protal Design ©{fullYear} Created By Looper.Zhuo
        </Footer>
      </Layout>
    </Layout>
  );
}
