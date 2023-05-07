import { useState } from "react";
import style from './index.module.scss'
import { Breadcrumb, Layout, Menu, theme } from "antd";
import menuItems from "./config";
const { Content, Footer,Header, Sider } = Layout;
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
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          className={style["ant-layout-header"]}
          style={{ padding: 0, background: colorBgContainer }}
        ></Header>
        <Content className={style["content"]}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer className={style["ant-layout-footer"]}>
          React Template Protal Design ©{fullYear} Created By Looper.Zhuo
        </Footer>
      </Layout>
    </Layout>
  );
}
