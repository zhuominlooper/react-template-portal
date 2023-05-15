import { connect } from "react-redux";
import { addPerson } from "./actions";
import { Button } from "antd";

function Person(props: any) {
  const onAddPerson = () => {
    props.addPerson({ name: "dfgdf" });
  };
  return (
    <>
      <h1>当前的人员信息：{props.num}</h1>
      <ul>
        {props.person.map((item: { name: string }, index: number) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <Button onClick={onAddPerson}>+</Button>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    person: state.personReducer,
    num: state.increment,
  };
};
// 映射操作状态的方法，组件中需要使用的事件方法
const mapDispatchToProps = {
  addPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
