import { createContext } from "react";

const PersonContext = createContext({
  name: "looper",
  age: 26,
}); //默认值

export default PersonContext;
