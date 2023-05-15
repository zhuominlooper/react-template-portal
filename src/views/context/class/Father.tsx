import { Component } from "react";
import SonComp from "./Son";
export default class FatherComp extends Component {
  render() {
    return (
      <SonComp>
        <div>this is son comp</div>
      </SonComp>
    );
  }
}
