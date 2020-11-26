import { Component } from 'react';
import { withRouter } from 'react-router-dom';

interface Props{location:any}
class ScrollToTop extends Component<Props> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
