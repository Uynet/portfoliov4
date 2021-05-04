import "../../scss/index.scss";
import "../../scss/contact.scss";
import { NavigationBar } from "./navigationBar";
import * as React from "react";

export class Links extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div className="header"></div>

        <div className="headline">
          <div className="headlineContent">
            <div className="contentHead">ストア</div>
          </div>
        </div>

        <div className="contentArea">
          <div className="card">
            <div className="description">
              <a className="link" href="https://uynet.booth.pm/">
                BOOTH
              </a>
              はこちら
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
