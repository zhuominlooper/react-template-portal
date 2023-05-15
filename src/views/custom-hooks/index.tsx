import { useScrollHook } from "./hooks";
const HookComp = () => {
  const scrollVal = useScrollHook();
  return (
    <section style={{ textAlign: "center", padding: "32px" }}>
      <div style={{ width: "1400px" }}>
        <div>滚动y：{scrollVal.y}</div>
        <div>滚动x：{scrollVal.x}</div>
      </div>
    </section>
  );
};

export default HookComp;
