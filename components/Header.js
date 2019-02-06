import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>

      <Image style={{width: 16, height: 20}}
             source={require('../assets/icons/rss-solid.png')}
      />
      <Text style={styles.title}>{props.title}</Text>

    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    marginTop: 24,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#999999'
  },
  title: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 20
  }
});

export default Header;