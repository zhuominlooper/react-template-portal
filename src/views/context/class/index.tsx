import { Component } from "react";
import FatherComp from "./Father";
import PersonContext from "./context";
import { Button } from "antd";

export default class ContextComp extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      info: {
        name: "looper",
        age: 26,
      },
    };
  }
  onUpdate = () => {
    //const info: any = { ...this.state.info, ...{ name: "zhuo" } }; //产生新的值
    // const info: any = Object.assign(this.state.info, { name: "zhuo" }); //产生新的值
    const info: any = this.state.info;
    info.name = `zhuo-${new Date()}`;
    this.setState({
      info: info,
    });
  };
  render() {
    const info = this.state as any;
    return (
      <>
        <Button type="primary" onClick={this.onUpdate}>
          修改contenx
        </Button>
        <PersonContext.Provider value={info}>
          <FatherComp></FatherComp>
        </PersonContext.Provider>
      </>
    );
  }
}
