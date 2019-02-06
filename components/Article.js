import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

const Article = props => {

  const link = { uri: props.link };

  return (
    <WebView
      source={link}
      style={{marginTop: 10}}
    />
  );
};

export default Article;