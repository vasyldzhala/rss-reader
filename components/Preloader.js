import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Preloader = props => {
  return (
    <View style={styles.container}>
      <Text>LOADING...</Text>
      <ActivityIndicator size="large" color="#aaa" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Preloader;