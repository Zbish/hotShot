import React, { Component } from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import Games from '../components/Games'
import Ranking from '../components/Ranking'

export default class Liga extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ScrollView style={styles.container}>
          <Games></Games>
          <Ranking></Ranking>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });