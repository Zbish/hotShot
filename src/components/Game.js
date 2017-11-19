import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'

export default class Game extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.teame}>
              <Image source={require('../images/maccabiHaifa.png')} style={styles.logo}></Image>
              <Text style={styles.Text}>MACCABI HAIFA</Text>
              </View>
              <Text style={styles.Text}>4 : 1</Text>
              <View style={styles.teame}>
              <Image source={require('../images/macabiTelAviv.jpg')} style={styles.logo}></Image>
              <Text style={styles.Text}>MACCABI TEL AVIV</Text>
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      margin:1,
      borderWidth:1, 
      borderColor: 'black',
      borderRadius:5,
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
    logo:{
        width:35,
        height:35
    },
    teame:{
        alignItems:'center'
    }

  });