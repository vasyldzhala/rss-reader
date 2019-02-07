import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

import ItemThumbnail from './ItemThumbnail';
import Article from './Article';
import Article1 from './Article1';

export default class ItemList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isArticleVisible: false
    }

  }

  onPress = (articleLink) => {
    this.setState({
      isArticleVisible: true,
      articleLink: articleLink
    });
  };

  render() {

    const ArticleModal = () => {
      if (this.state.isArticleVisible) {
        return (
          <Article
            isArticleVisible={this.state.isArticleVisible}
            articleLink={this.state.articleLink}
          />
        );
      }
      return null;
    };

    return (
      <View style={styles.itemListContainer}>

        <FlatList
          data={this.props.rssItems}
          renderItem={
            ({item}) => {
              return (
                <TouchableHighlight onPress={this.onPress.bind(this, item.link)}>
                  <ItemThumbnail item={item}/>
                </TouchableHighlight>
              )
            }
          }
        />

        <ArticleModal/>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  itemListContainer: {
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
