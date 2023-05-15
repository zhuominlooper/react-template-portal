import { Button } from "antd";
import { counterStore } from "./store/counter";
import "./index.scss";
import { observer } from "mobx-react-lite";
function Mobx() {
  const onAdd = () => {
    counterStore.addCount(1);
  };
  const onSubtract = () => {
    counterStore.decrement(1);
  };
  return (
    <>
      <section className="section-mobx">
        <h1>当前求和为：{counterStore.count}</h1>
        <h1>当前计算属性的值：{counterStore.count2}</h1>
        <Button onClick={onAdd}>+</Button>
        <Button onClick={onSubtract}>-</Button>
      </section>
    </>
  );
}

//observer,检测mobx里的变化，并更新界面
export default observer(Mobx);
