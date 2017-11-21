import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'

export default class Game extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      console.log('fff' + this.props.item.icon.home)
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.teame}>
                    <Image source={require('../images/maccabiHaifa.png')}
                     style={styles.logo}></Image>
                    <Text style={styles.Text}>{this.props.item.home}</Text>
              </View>
              <Text style={styles.score}>{this.props.item.score.home} : {this.props.item.score.away}</Text>
              <View style={styles.teame}>
                    <Image source={require('../images/macabiTelAviv.jpg')} style={styles.logo}></Image>
                    <Text style={styles.Text}>{this.props.item.away}</Text>
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
       flex:1,
    },
    Text:{
        alignSelf:'center'  
    },
    logo:{
        width:35,
        height:35
    },
    teame:{
        alignItems:'center',
        flex:3
    },
    score:{
        flex:1,
        alignSelf:'center' 
    }

  });