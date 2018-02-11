import React from 'react';

import LeftNav from './leftNav/leftNav'
import Iframe from './iframe/iframe'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  _iframeLoaded() {
    console.log(this.contentWindow.document.querySelector('.busiInfo'))
    this.contentWindow.document.querySelector('.busiInfo').style.color = "red";
  }
  render() {
    return (
      <div className='demo-container'>
        <LeftNav />
        <Iframe src="http://localhost:63342/webpack-react/mock/mockDashboard.html" onIframeLoad={this._iframeLoaded} />
      </div>
    )
  }
}

export default App