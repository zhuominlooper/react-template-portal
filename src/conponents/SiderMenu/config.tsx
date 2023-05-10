import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

interface IItem {
  key:string;
  icon?:any ;
  children?:IItem[] |null;
  label:string;
}

const menuItems: IItem[] = [
  {
    key: "/dashboard",
    icon: <PieChartOutlined />,
    children: null,
    label: "首页",
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
    children:null
  },
];

export default menuItems;
