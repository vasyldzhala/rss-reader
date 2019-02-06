import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {parseString} from 'react-native-xml2js';

import Preloader from './Preloader';
import Header from './Header';
import ItemList from './ItemList';

export default class RssList extends React.Component {

  // url = 'http://www.omdbapi.com/?apikey=147c5a62&t=terminator&y=1996';
  constructor(props) {
    super(props);

    this.url = 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml';
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
      .map( item => ({
        title: item.title[0],
        description: item.description[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        thumbnailUrl: item['media:thumbnail'][0].url
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

  errorMessage = () => {
    return (
      <View style={styles.messageContainer}>
        <Text>{this.state.message}</Text>
      </View>
    )
  };

  render() {
    {/*<ItemList rssItems={this.rssItems}/>*/}
    {/*<Text>{this.rssItems[0].title}</Text>*/}
    const content = () => {
      switch (this.state.status) {
        case 'waiting':
          return <Preloader/>;
        case 'error':
          return this.errorMessage();
        case 'success':
          return <ItemList rssItems={this.rssItems}/>;
      }
    };

    return (
      <View style={styles.container}>
        <Header title={this.rssTitle}/>
        { content() }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  messageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

});