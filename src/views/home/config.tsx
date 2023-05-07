import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

interface IItem {
  key:string;
  icon?:any ;
  children?:IItem[] |null;
  label:string;
}

const menuItems: IItem[] = [
  {
    key: "dash",
    icon: <PieChartOutlined />,
    children: [
      {
        key: "echarts",
        icon: null,
        children: null,
        label: "echarts",
      },
    ],
    label: "首页",
  },
  {
    key: "manage",
    icon: <UserOutlined />,
    children: null,
    label: "管理",
  },
];

export default menuItems;
