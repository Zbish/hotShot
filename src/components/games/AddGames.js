import React, { Component } from 'react';
import {Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  TextInput} from 'react-native'
import Games from './Games'
import GamesButtons from './GamesButtons'
export default class AddGames extends Component {
  render() {
    return (
          <ScrollView style={styles.scroll}>
            <Games gamesList={this.props.games.rounds[0]}
              teams={this.props.teams}
              onPress={(game)=>this.props.addGame(game)}/>
              <GamesButtons
              gamesSchedule={this.props.games}
              ></GamesButtons>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  scroll:{
flex:1
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
