import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Text,View} from 'react-native'

export default class MyLiga extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         this is my liga page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });