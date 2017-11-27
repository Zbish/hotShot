import React, { Component } from 'react';
import {Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  TextInput} from 'react-native'
import Games from './Games'
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
            
            {/* <Text style={styles.text}>ADD Games</Text>
              {
                this.props.allgames[0].map((item, index) => {
                            return <Button 
                                        style={styles.text}
                                        key={index} item={item}
                                        onPress={()=>this.addGames(item.match,this.props.allgames[0])} 
                                        title={item.match.toString()}
                                        ></Button>
          })
        } */}
        <Games  gamesList={this.props.allgames[0]} teams={this.props.teams} />
          
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  scroll:{
 
  },  
  container: {
      margin:5
    },
    text:{
      alignSelf:'flex-start',
      color:'black',
      fontSize:16
    },
   
  });
