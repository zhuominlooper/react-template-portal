import { Button } from "antd";
import useStore from "./store/store";
import "./index.scss";
import { observer } from "mobx-react-lite";
function Mobx() {
  const store = useStore();
  const onAdd = () => {
    store.counterStore.addCount(1);
  };
  const onSubtract = () => {
    store.counterStore.decrement(1);
  };
  const onAddPerson = () => {
    store.personStore.addPerson({ name: new Date() + "" });
  };
  const onUpdatePerson = () => {
    store.personStore.updatePerson({ name: new Date() + "" });
  };
  return (
    <>
      <section className="section-mobx">
        <h1>当前求和为：{store.counterStore.count}</h1>
        <Button onClick={onAdd}>+</Button>
        <Button onClick={onSubtract}>-</Button>
        <hr></hr>
        <h1>当前人员信息:</h1>
        <ul>
          {store.personStore.personInfo.map(
            (item: { name: string }, index: number) => {
              return <li key={index}>{item.name}</li>;
            }
          )}
        </ul>
        <Button onClick={onAddPerson}>添加人员</Button>
        <Button onClick={onUpdatePerson}>修改人员</Button>
      </section>
    </>
  );
}

//observer,检测mobx里的变化，并更新界面
export default observer(Mobx);
