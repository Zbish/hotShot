import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'
import Flags from '../images/Flags'

export default class Game extends Component {
  constructor(props) {
    super(props)
  }
  getTeam(code,array){
    for(i = 0 ; i < array.length ; i++)
      {
           if(array[i].code == code)
              {
                return array[i].name
              }   
      }
}
  render() {
    var team1 =   this.props.item.home
    var team2 =   this.props.item.away
    var item = this.props.item
      var team3 = this.getTeam(team1,this.props.teams.team)
      var team4 = this.getTeam(team2,this.props.teams.team)
 
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.teame}>
                    <Image source={Flags[team3]} style={{width: 32, height: 32}}
                     style={styles.logo}></Image>
                    <Text style={styles.Text}>{team3}</Text>
              </View>
              <Text style={styles.score}>{item.score.home} : {item.score.away}</Text>
              <View style={styles.teame}>
                    <Image source={Flags[team4]} style={styles.logo}></Image>
                    <Text style={styles.Text}>{team4}</Text>
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