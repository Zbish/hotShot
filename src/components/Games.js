import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native'
import Game from '../components/Game'

export default class Games extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
           <View style={styles.datacont}>
          <Text style={styles.ligaData}>Game 20</Text>
              <Text style={styles.ligaData}>Sunday 20/6/2018</Text>
              <Text style={styles.ligaData}>the super liga from israel</Text>
          </View>
          <View style={styles.header}>
              <Text style={styles.Text}>| Home |</Text>
              <Text style={styles.Text}>| Score |</Text>
              <Text style={styles.Text}>| Away |</Text>
          </View>
          <Game />
          <Game />
          <Game />
          <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'gray',
      margin:5,
      padding:5
    },
    header:{
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    Text:{
        alignSelf:'center'  
    },
    ligaData:{
        alignSelf:'center',
        color:'black',
        
    },
    datacont:{

    }
  });