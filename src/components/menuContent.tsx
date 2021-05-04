import * as React from "react";
import "../../scss/index.scss";
import { Link } from "react-router-dom";

interface MenuProps {
  item: any;
  key: any;
}
export class MenuContent extends React.Component<MenuProps> {
  render() {
    const { name, link } = this.props.item;

    const page = location.href.split("/")[3];
    const isCurrentPage = page.toLowerCase() == name.toLowerCase();
    const className = isCurrentPage ? "navigationContentCurrent" : "navigationContent";

    return (
      <React.Fragment>
        {/* because outer link : No good.. */}
        {name == "Store" ? (
          <a href={link}>
            <div className={className}>{name}</div>
          </a>
        ) : (
          <Link to={link}>
            <div className={className}>{name}</div>
          </Link>
        )}
      </React.Fragment>
    );
  }
}
