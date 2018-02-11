import React from 'react';
import ReactDOM from 'react-dom';


class Iframe extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount (){
    //this.refs.iframe.getDOMNode().addEventListener('load', this.props.onIframeLoad);
    console.log(ReactDOM.findDOMNode(this))
    ReactDOM.findDOMNode(this).addEventListener('load', this.props.onIframeLoad);
  }
  render() {
    return (
      <iframe id="myIframe" src={this.props.src} width="100%" height="800px"></iframe>
    )
  }
}

export default Iframe