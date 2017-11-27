import React, { Component } from 'react';
import {Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  TextInput} from 'react-native'

export default class AddGames extends Component {
  constructor(props) {
    super(props)
  }
  addGames(match,array){
    for(i=0 ; i < array.length ; i++)
      {
        if(array[i].match == match){
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
          <ScrollView style={styles.scroll}>
            <View style={styles.container}>
            <Text style={styles.text}>ADD Games</Text>
              {
                this.props.allgames[0].map((item, index) => {
                            return <Button 
                                        style={styles.text}
                                        key={index} item={item}
                                        onPress={()=>this.addGames(item.match,this.props.allgames[0])} 
                                        title={item.match.toString()}
                                        ></Button>
          })
        }
            </View>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin:5
    },
    text:{
      alignSelf:'flex-start',
      color:'black',
      fontSize:16
    },
    game:{
        margin:5
    }
  });
