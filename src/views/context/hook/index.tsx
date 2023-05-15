import { createContext, useState } from "react";
import FatherComp from "./Father";
import { Button } from "antd";
export const PersonContext = createContext({
  name: "looper",
  age: 26,
}); //默认值
const ContextComp = () => {
  const [info, setInfo] = useState<{ age: number; name: string }>({
    name: "looper",
    age: 26,
  });
  const onClick = () => {
    setInfo({
      ...info,
      ...{ name: "zhuo" },
    });
  };
  return (
    <div>
      <Button onClick={onClick}>修改context</Button>
      <PersonContext.Provider value={info}>
        <FatherComp></FatherComp>
      </PersonContext.Provider>
    </div>
  );
};
export default ContextComp;
