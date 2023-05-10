import { Menu } from "antd";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import menuItems from "./config";

export default function SiderMenu() {
  const [openKeys, setOpenKeys] = useState<string[]>([""]);
  const navigateTo = useNavigate();
  const curRouter = useLocation();
  //点击菜单，跳转到对应路由
  const onMenuClick = (e: { key: string }) => {
    //编程式导航
    navigateTo(e.key);
  };
  //展开和回收菜单执行
  const onHandleChange = (keys: string[]) => {
    setOpenKeys([keys.pop() || ""]);
  };
  return (
    <Menu
      openKeys={openKeys}
      onOpenChange={onHandleChange}
      onClick={onMenuClick}
      theme="dark"
      defaultSelectedKeys={[curRouter.pathname]}
      mode="inline"
      items={menuItems}
    />
  );
}
