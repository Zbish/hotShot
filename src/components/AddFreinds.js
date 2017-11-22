import React, { Component } from 'react';
import {Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput} from 'react-native'

export default class AddFreinds extends Component {
  constructor(props) {
    super(props)
  }
  addFreinds(code,array){
    for(i=0 ; i < array.length ; i++)
      {
        if(array[i].code == code){
          this.addPlayer(array[i])
          return 
        }
      }
      return null
  }
  addPlayer(player){
      this.props.addPlayer(player)
  }
  render() {
    return (
          <View style={styles.container}>
               <Text style={styles.text}>ADD PLAYERS</Text>
              <Button onPress={()=>this.addFreinds(1,this.props.freinds)} title={'Gil'}></Button>
              <Button onPress={()=>this.addFreinds(2,this.props.freinds)} title={'dor'}></Button>
              <Button onPress={()=>this.addFreinds(3,this.props.freinds)} title={'omri'}></Button>
              <Button onPress={()=>this.addFreinds(5,this.props.freinds)} title={'nizan'}></Button>
              <Button onPress={()=>this.addFreinds(4,this.props.freinds)} title={'azran'}></Button>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      color: '#000000',
      alignSelf: 'stretch',
      padding: 5,
      margin:10,
      marginBottom: 10,
      backgroundColor: 'rgba(122, 186, 122,0.7)',
      borderColor: '#fff',
      borderRadius: 10,
      borderWidth: 0.6,
    },
    text:{
      alignSelf:'flex-start',
      color:'black',
      fontSize:15
    }
  });
