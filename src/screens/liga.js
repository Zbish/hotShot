import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native'
import Games from '../components/Games'

export default class Liga extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
          <Games></Games>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });