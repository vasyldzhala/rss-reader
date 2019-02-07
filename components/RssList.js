import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Preloader from './Preloader';
import Header from './Header';
import ItemList from './ItemList';

export default class RssList extends React.Component {

  ErrorMessage = () => {
    return (
      <View style={styles.messageContainer}>
        <Text>{this.props.status.message}</Text>
      </View>
    )
  };

  render() {

    const Content = () => {
      switch (this.props.status.status) {
        case 'waiting':
          return <Preloader/>;
        case 'error':
          return <ErrorMessage/>;
        case 'success':
          return <ItemList rssItems={this.props.rssItems}/>;
      }
    };

    return (
      <View style={styles.container}>
        <Header title={this.props.rssTitle}/>
        <Content/>
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