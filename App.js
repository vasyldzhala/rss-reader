import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RssList from './components/RssList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RssList/>
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
