import * as React from 'react';
import { withRouter } from 'react-router'

interface Props{
    location : any
}
class ScrollToTop extends React.Component<Props> {
　　　//コンポーネントがmountされた時に発動
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0) //一番上まで
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)