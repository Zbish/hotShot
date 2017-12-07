import React, { Component } from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'
import Rank from '../components/Rank'
import RankLeader from '../components/RankLeader'
import {sortArray,getLeaders,getLosers} from '../utils'


export default class Ranking extends Component {

     render() {
      const props = this.props
      const playerPoints =  props.rankList
      const players = sortArray(playerPoints)
      const leaders = getLeaders(players)
      const losers = getLosers(players)
    return (
      <View style={styles.container}>
          <Text style={styles.leaderBoard}>LeaderBoard</Text>
          <View style={styles.content}>
          {
            leaders.map((item, index) => {
            return <RankLeader key={index} 
                               item={item}
                               place={index+1}
            />
          })
        }
          </View>
          <View>
          {
            losers.map((item, index) => {
            return <Rank key={index} 
                        item={item}
                        place={index + 4}
            />
          })
        }
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2E8B57',
      padding:5
    },
    leaderBoard:{
      alignSelf:'center',
      color:'#F5FFFA',
      fontSize:30,
      fontWeight: 'bold',
     
  },
    content:{
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
  
  });