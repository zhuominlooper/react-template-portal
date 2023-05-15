import { useContext } from "react";
import { PersonContext } from "./index";
function SonComp() {
  const context = useContext(PersonContext);
  return (
    <>
      <p>获取的context值--age:{context.age}</p>
      <p>获取的context值--age:{context.name}</p>
    </>
  );
}

export default SonComp;
