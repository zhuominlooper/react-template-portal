import { Button } from "antd";
import { useCount } from "./CountProvider";
const CountComp = () => {
  const [count, dispatch] = useCount();
  const onIncrement = () => {
    dispatch({ type: "increment", data: 10 });
  };
  const onDecrement = () => {
    dispatch({ type: "decrement", data: 1 });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>当前的count值为:{count}</h1>
      <Button onClick={onIncrement}>加法</Button>
      <Button onClick={onDecrement}>减法</Button>
    </div>
  );
};

export default CountComp;
