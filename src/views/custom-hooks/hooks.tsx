import { useEffect, useState } from "react";

const useScrollHook = () => {
  //初始化值
  const [scrollVal, setScrollVal] = useState({
    x: window.screenX,
    y: window.screenY,
  });
  //监听值的改变
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollVal({
        x: window.scrollX,
        y: window.scrollY,
      });
    });
    return () => {
      //移除监听
      window.removeEventListener("scroll", () => {
        setScrollVal({
          x: window.scrollX,
          y: window.scrollY,
        });
      });
    };
  }, [scrollVal]);

  return scrollVal;
};

export { useScrollHook };
