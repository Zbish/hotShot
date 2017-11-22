import React, { Component } from 'react';
import {Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput} from 'react-native'

export default class AddGames extends Component {
  constructor(props) {
    super(props)
  }
  addGames(code,array){
    for(i=0 ; i < array.length ; i++)
      {
        if(array[i].code == code){
          this.addGame(array[i])
          return 
        }
      }
      return null
  }
  addGame(game){
      this.props.addgame(game)
  }
  render() {
    return (
          <View style={styles.container}>
               <Text style={styles.text}>ADD Games</Text>
              <Button style={styles.game} onPress={()=>this.addGames(1,this.props.allgames)} title={'argentina - brazil'}></Button>
              <Button style={styles.game} onPress={()=>this.addGames(2,this.props.allgames)} title={'belgium - colombia'}></Button>
              <Button style={styles.game} onPress={()=>this.addGames(3,this.props.allgames)} title={'france - sweden'}></Button>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin:5
    },
    text:{
      alignSelf:'flex-start',
      color:'black',
      fontSize:15
    },
    game:{
        margin:5
    }
  });
