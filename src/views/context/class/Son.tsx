import { Component } from "react";
import PersonContext from "./context";

export default class SonComp extends Component {
  //注入context 在class组件中，必须要为static属性contextType，设置通过react.createContext()创建的context对象，
  //才能使用this.context,不然this.context的值会为一个{}
  static contextType = PersonContext;
  render() {
    const info: { age: number; name: string } = (this.context as { info: any })
      ?.info as any;
    return (
      <div>
        <div>
          <p>获取的context值--age:{info.age}</p>
          <p>获取的context值--age:{info.name}</p>
        </div>
      </div>
    );
  }
}
