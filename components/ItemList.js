import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ItemList = props => {

  return (

    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={props.rssItems}
          renderItem={({item}) => <Text keyExtractor={(item, index) => index} style={styles.item} >{item.title}</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  item: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10
  }
});

export default ItemList;