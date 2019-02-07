import React from 'react';

import RssReader from './components/RssReader';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.url = 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml';
  }

  render() {
    return (
      <RssReader
        url={this.url}
      />
    );
  }
}
