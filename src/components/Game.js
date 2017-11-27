import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,TouchableHighlight} from 'react-native'
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
    getMatchNum(num){
     this.props.gamenum(num)
    }
  render() {
    var team1 =   this.props.item.team1
    var team2 =   this.props.item.team2
    var item = this.props.item
      var team3 = this.getTeam(team1,this.props.teams.team)
      var team4 = this.getTeam(team2,this.props.teams.team)
      var tempDate = new Date(item.Date);
    return (
      <TouchableHighlight style={styles.wrapper} underlayColor='grey' onPress={()=>this.getMatchNum(item.match)} >
        <View style={styles.container}>
        <View style={styles.team}>
                   <Image source={Flags[team3]} style={styles.logo}></Image>
                    <Text style={styles.teamName}>{team3}</Text>
              </View>
              <View style={styles.scoreContainer}>
                  <Text style={styles.Text}>Match {item.match}</Text>
                  {/* <Text style={styles.score}>{item.score.team1} : {item.score.team2}</Text> */}
                  <Text style={styles.score}>{tempDate.getHours()}:{tempDate.getMinutes()}0</Text>
                  <Text style={styles.Text} >Group {item.group}</Text>
              </View>
              <View style={styles.team}>
                    <Image source={Flags[team4]} style={styles.logo}></Image>
                    <Text style={styles.teamName}>{team4}</Text>
              </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
     
    },
    container:{
      backgroundColor: '#EAEDED',
      flexDirection:'row',
      padding:10
    },
    team:{
      alignItems:'center',
      flexDirection:'column',
      flex:3
  },
  teamName:{
        alignSelf:'center'  
    },
    logo:{
        width:30,
        height:18
    },
   scoreContainer:{
    alignItems:'center',
    flex:3
   },
    score:{
        flex:1,
        alignSelf:'center',
        color:'black' 
    },
    Text:{
      fontSize:12
    }
  });