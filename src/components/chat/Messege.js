import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default class Messege extends Component {
  render() {
    return (
            <View style={styles.container}>
                <Text> messege for all my freinds ou </Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        padding: 8,
        margin:10,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 0.6,
      },

  });
