import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const ItemThumbnail = props => {

  let image = { uri: props.item.imageUrl };

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image}
        source={image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {props.item.title}
        </Text>
        <Text style={styles.description}>
          {props.item.description}
        </Text>
        <Text style={styles.date}>
          {props.item.pubDate}
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {


    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 140,
    height: 100,
    margin: 5,
    marginTop: 10
  },
  textContainer: {
    flex: 1,
    padding: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  description: {
    paddingTop: 3,
    fontSize: 12
  },
  date: {
    fontSize: 10
  }
});

export default ItemThumbnail;