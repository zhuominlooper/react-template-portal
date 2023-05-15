import {
  PieChartOutlined,
  UserOutlined,
  RadarChartOutlined,
  ApartmentOutlined,
  PicLeftOutlined,
} from "@ant-design/icons";

interface IItem {
  key: string;
  icon?: any;
  children?: IItem[] | null;
  label: string;
}

const menuItems: IItem[] = [
  {
    key: "/dashboard",
    icon: <PieChartOutlined />,
    children: null,
    label: "首页",
  },
  {
    key: "/hook",
    icon: <PicLeftOutlined />,
    label: "自定义hook",
    children: [
      {
        key: "/custom-hook",
        icon: null,
        children: null,
        label: "custom-hook",
      },
    ],
  },
  {
    key: "/context",
    icon: <ApartmentOutlined />,
    label: "依赖注入",
    children: [
      {
        key: "/class-context",
        icon: null,
        children: null,
        label: "class-context",
      },
      {
        key: "/hook-context",
        icon: null,
        children: null,
        label: "hook-context",
      },
    ],
  },
  {
    key: "/redux-detail",
    icon: <RadarChartOutlined />,
    label: "状态管理",
    children: [
      {
        key: "/redux",
        icon: null,
        children: null,
        label: "redux",
      },
      {
        key: "/react-redux",
        icon: null,
        children: null,
        label: "react-redux",
      },
      {
        key: "/use-reducer",
        icon: null,
        children: null,
        label: "use-reducer",
      },
      {
        key: "/mobx",
        icon: null,
        children: null,
        label: "mobx",
      },
      {
        key: "/mobx-module",
        icon: null,
        children: null,
        label: "mobx模块化",
      },
    ],
  },
  {
    key: "echarts",
    icon: <UserOutlined />,
    label: "echarts",
    children: [
      {
        key: "/echarts/bar", //key就是路径
        icon: null,
        children: null,
        label: "bar",
      },
      {
        key: "/echarts/line",
        icon: null,
        children: null,
        label: "line",
      },
    ],
  },
  {
    key: "antvg6",
    icon: <UserOutlined />,
    label: "antvg6",
    children: null,
  },
];

export default menuItems;
