import "./index.scss";
import { Button } from "antd";
import { increment, decrement } from "./actions";
import { connect } from "react-redux";
import Person from "./person";
export function ReduxComp(props: any) {
  const onAdd = () => {
    props.increment(1);
  };
  const onSubtract = () => {
    props.decrement(1);
  };
  return (
    <section className="section-redux">
      <h1>当前求和为：{props.num}</h1>
      <Button onClick={onAdd}>+</Button>
      <Button onClick={onSubtract}>-</Button>
      <hr></hr>
      <Person></Person>
    </section>
  );
}

const mapStateToProps = (state: any) => {
  return {
    num: state.increment,
  };
};
// 映射操作状态的方法，组件中需要使用的事件方法
const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComp);
