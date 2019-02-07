import React from 'react';
import {StyleSheet, Text, View, WebView, Modal, TouchableHighlight, ActivityIndicator} from 'react-native';
import Preloader from './Preloader';

export default class Article extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isArticleVisible: this.props.isArticleVisible,
      isLoadEnd: false
    }
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isArticleVisible}
          onRequestClose={() => {
            this.setState({
              isArticleVisible: false
            });
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableHighlight
                onPress={() => {
                  this.setState({
                    isArticleVisible: false
                  });
                }}>
                <Text style={{color: 'white'}}>Show Article List</Text>
              </TouchableHighlight>
              { !this.state.isLoadEnd ?
                <ActivityIndicator size="small" color="#fff" />
                : null
              }
            </View>
            <View style={styles.modalContainer}>
              <WebView
                source={{uri: this.props.articleLink}}
                onLoadStart={(e) => this.setState({isLoadEnd: false})}
                onLoadEnd={(e) => this.setState({isLoadEnd: true})}
              >
              </WebView>
            </View>

          </View>
        </Modal>

        <View style={styles.modalHeader}>
          <TouchableHighlight
            onPress={() => {
              this.setState({
                isArticleVisible: true
              });
            }}>
            <Text style={{color: 'white'}}>Show Article</Text>
          </TouchableHighlight>
        </View>
      </View>

    );
  }

};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  modalHeader: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#999999',
    color: 'white',
    fontSize: 14
  }
});

{/*<WebView*/}
  {/*source={{uri: this.props.articleLink}}*/}
  {/*style={{marginTop: 10}}*/}
{/*>*/}
{/*</WebView>*/}