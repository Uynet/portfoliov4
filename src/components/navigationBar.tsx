import * as React from "react";
import "../../scss/index.scss";
import "../../scss/navBar.scss";
import { MenuContent } from "./menuContent";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Hambar } from "./hambar";

const createMenu = (name, link) => {
  return { name: name, link: link };
};

function BarSp(props) {
  return (
    <div className="navigationBarSp">
      <Hambar items={props.items} />
      <Link to="/" style={{ gridColumnStart: 2 }}>
        <div className="navigationTopSp">uynet.work</div>
      </Link>
    </div>
  );
}
function BarPc(props) {
  const items = props.items;
  return (
    <div className="navigationBar">
      <Link to="/">
        <div className="navigationTop">uynet.work</div>
      </Link>
      <div className="navigationContentBox">
        {items.map((item) => {
          return <MenuContent item={item} key={item.name} />;
        })}
      </div>
    </div>
  );
}

export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    window.addEventListener("resize", (e) => {
      this.render();
    });
  }
  render() {
    const items = [
      createMenu("Profile", "/profile"),
      createMenu("Works", "/works"),
      createMenu("Store", "https://uynet.booth.pm/"),
    ];
    return (
      <React.Fragment>
        <React.Fragment>
          <MediaQuery query="(max-width: 767px)">
            <BarSp items={items} />
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <BarPc items={items} />
          </MediaQuery>
        </React.Fragment>
      </React.Fragment>
    );
  }
}
