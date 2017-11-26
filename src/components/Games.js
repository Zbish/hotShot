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
                <Text style={styles.ligaData}>Game {this.props.gamesList.game} , {this.props.gamesList.name}</Text>
              <Text style={styles.ligaData}>{this.props.gamesList.date}</Text>
              <Text style={styles.ligaData}></Text>
          </View>
          {
            this.props.gamesList.games.map((item, index) => {
            return <Game key={index} 
                         item={item}
                         teams={this.props.teams}
            />
          })
        }
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
    ligaData:{
        alignSelf:'center',
        color:'black',
        
    },
    datacont:{

    }
  });