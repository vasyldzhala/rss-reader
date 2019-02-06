import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ItemThumbnail from './ItemThumbnail'

const ItemList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.rssItems}
        renderItem={({item}) => <ItemThumbnail item={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
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