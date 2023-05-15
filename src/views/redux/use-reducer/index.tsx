import { CountProvider, useCount } from "./CountProvider";
import CountComp from "./Count";
const ReducerComp = () => {
  return (
    <>
      <CountProvider>
        <CountComp></CountComp>
      </CountProvider>
    </>
  );
};

export default ReducerComp;
