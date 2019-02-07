import React from 'react';
import { StyleSheet, View } from 'react-native';
import {parseString} from 'react-native-xml2js';

import RssList from './RssList';

export default class RssReader extends React.Component {

  constructor(props) {
    super(props);

    this.url = props.url;
    this.rssTitle = '';
    this.rssItems = [];
    this.state = {
      status: 'waiting',
      message: ''
    }
  }

  componentDidMount() {
    this.fetchRss(this.url);
  }

  parseRssTitle = rssObj => {
    return rssObj.rss.channel[0].description[0];
  };

  parseRssItems = rssObj => {
    return rssObj.rss.channel[0].item
      .map( (item, index) => ({
        title: item.title[0],
        description: item.description[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        imageUrl: item['media:thumbnail'][0]['$'].url,
        imageWidth: item['media:thumbnail'][0]['$'].width,
        imageHeight: item['media:thumbnail'][0]['$'].height,
        key: index.toString()
      }));
  };

  fetchRss = (url) => {
    fetch(url)
      .then(response => {
        return response.text();
      })
      .then((response) => {
        if (!response) {
          throw new Error(`Page not found, ${err}`);
        } else {
          parseString(response, (err, result) => {
            if (err) {
              throw err;
            }
            try {
              this.rssTitle = this.parseRssTitle(result);
              this.rssItems = this.parseRssItems(result);
              this.setState({
                status: 'success',
                message: ''
              });
            } catch (err) {
              throw new SyntaxError(`Parsing data error, ${err}`);
            }
          });
        }
      }).catch((err) => {
      console.log('fetch', err);
      this.setState({
        status: 'error',
        message: `Error, ${err}`
      })
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <RssList
          status={this.state}
          rssTitle={this.rssTitle}
          rssItems={this.rssItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
