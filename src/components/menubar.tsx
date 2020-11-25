import {Link} from "react-router-dom";
import * as React from "react";
import "../../scss/menubar.scss";

const createMenu = (name, link) => {
  return { name: name, link: link };
};
interface Props{

}
interface States{
    isOpen:boolean , isFirstTime:boolean
}

export class Menubar extends React.Component <Props,States>{
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isFirstTime: true };
  }
  toggleOpen = e => {
    this.setState({ isOpen: !this.state.isOpen, isFirstTime: false });
  };
  render() {
    const items = [
      createMenu("Profile", "/profile"),
      createMenu("Works", "/works"),
      createMenu("Store", "/store"),
      createMenu("Contact", "/contact")
    ];
    let className = "menubar"
    className += this.state.isOpen? " open":" open";

    return (
      <React.Fragment>
        <div className={ className } >
          <div className={"menuItemWrapper"}>
            { items.map((item, i) => {
                return (
                    <Link to={item.link} key={i}>
                        <div className="menuItem">{item.name}</div>
                    </Link>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}