import "./index.scss";
import { Button } from "antd";
import store from "./store";
import { createIncrementAction, createDecrementAction } from "./actions";
import { useEffect, useState } from "react";
export default function ReduxComp() {
  const [count, setCount] = useState(0);
  //订阅变化，修改值
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState());
    });
  }, []);

  const onAdd = () => {
    store.dispatch(createIncrementAction(1) as any);
  };
  const onSubtract = () => {
    store.dispatch(createDecrementAction(1));
  };
  return (
    <section className="section-redux">
      <h1>当前求和为：{count}</h1>
      <Button onClick={onAdd}>+</Button>
      <Button onClick={onSubtract}>-</Button>
    </section>
  );
}
