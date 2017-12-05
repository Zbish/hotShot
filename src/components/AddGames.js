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
  render() {
    console.log('addgames', this.props.games.rounds[0])
    return (
          <ScrollView style={styles.scroll}>
            <Games gamesList={this.props.games.rounds[0]}
              teams={this.props.teams}
              onPress={(game)=>this.props.addGame(game)}/>
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
