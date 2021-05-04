import { Link } from "react-router-dom";
import * as React from "react";
import "../../scss/menubar.scss";

interface Props {
  items: any;
}
interface States {
  isOpen: boolean;
  isFirstTime: boolean;
}

const MenuItem = (props) => {
  return (
    <div
      className="menuItem"
      style={{
        color: props.isCurrentPage ? "#ff5084" : "#200050",
      }}
    >
      {props.item.name}
    </div>
  );
};

export class Menubar extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isFirstTime: true };
  }
  toggleOpen = (e) => {
    this.setState({ isOpen: !this.state.isOpen, isFirstTime: false });
  };
  render() {
    const items = this.props.items;
    let className = "menubar";
    className += this.state.isOpen ? " open" : " open";

    const page = location.href.split("/")[3];

    return (
      <React.Fragment>
        <div className={className}>
          <div className={"menuItemWrapper"}>
            {items.map((item, i) => {
              const isCurrentPage = page.toLowerCase() == item.name.toLowerCase();
              return (
                <>
                  {item.name == "store" ? (
                    <Link to={item.link} key={i}>
                      <MenuItem isCurrentPage={isCurrentPage} item={item} />
                    </Link>
                  ) : (
                    <a href={item.link} key={i}>
                      <MenuItem isCurrentPage={isCurrentPage} item={item} />
                    </a>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
