import React from 'react';
import {StyleSheet, Text, View, WebView, Modal, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Article1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Some text!!!</Text>
        <WebView
        source={{uri: 'https://google.com'}}
        style={{marginTop: 10}}
        />
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

{/*<WebView*/}
{/*source={{uri: this.props.articleLink}}*/}
{/*style={{marginTop: 10}}*/}
{/*>*/}
{/*</WebView>*/}