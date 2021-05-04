import { Link } from "react-router-dom";
import * as React from "react";

export default class Alink extends React.Component<{ to: string }> {
  render() {
    const to = this.props.to;
    return <Link to={to}></Link>;
  }
}
