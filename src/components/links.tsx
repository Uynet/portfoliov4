import "../../scss/index.scss";
import "../../scss/contact.scss";
import { NavigationBar } from "./navigationBar";
import * as React from "react";

const createLinkItem = (name, url, icon) => {
  return { name: name, url: url, icon: icon };
};

const LinkItem = (props) => {
  const { item } = props;
  return (
    <a className="linkItem" href={item.url}>
      <img src={item.icon} className="linkItemIcon" />
      <div>{item.name}</div>
    </a>
  );
};

export class Links extends React.Component {
  render() {
    const linkItems = [
      createLinkItem("Twitter", "https://twitter.com/uynet", "resource/logos/twitter.svg"),
      createLinkItem("Soundcloud", "https://soundcloud.com/uynet", "resource/logos/soundcloud.svg"),
      createLinkItem(
        "Youtube",
        "https://www.youtube.com/channel/UC0gq5YY0UQqIuOpzkhAcyUQ",
        "resource/logos/youtube.svg"
      ),
      createLinkItem("Github", "https://github.com/Uynet", "resource/logos/github.svg"),
      createLinkItem("PIXIV FANBOX", "https://uynet.fanbox.cc/", "resource/logos/pixiv.svg"),
      createLinkItem("Qiita", "https://qiita.com/uynet", "resource/logos/qiita.svg"),
      //createLinkItem("note", "", ""),
    ];

    return (
      <React.Fragment>
        <NavigationBar />
        <div className="header"></div>

        <div className="headline">
          <div className="headlineContent">
            <div className="contentHead">リンク</div>
          </div>
        </div>

        <div className="contentArea">
          <div className="card">
            <div className="description">
              {linkItems.map((linkItem, i) => {
                return <LinkItem item={linkItem} key={i} />;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
