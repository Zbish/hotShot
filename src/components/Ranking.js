import React, { Component } from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'
import Rank from '../components/Rank'
import RankLeader from '../components/RankLeader'

function sort(array)
{
  array.sort((a, b) => a.points < b.points) 
  return (array)
}
function leaders(array){
  leadersPlayers =[]   
  for(i=0 ; i < 3 ; i++)
    {
      if(array[i] == null)
        {
          return (leadersPlayers)
        }
        else{
          leadersPlayers.push(array[i]) 
        }
    }
  return (leadersPlayers)
}

function loserss(array){
  losers = []  
  for(i=3 ; i < array.length ; i++)
      {
         losers.push(array[i]) 
      }
      return(losers)
}

const Ranking =(props) => {

     var players = sort(props.RankList)
     var leader = leaders(players)
     var losers = loserss(players)
    return (
      <View style={styles.container}>
          <Text style={styles.text}>LeaderBoard</Text>
          <View style={styles.content}>
          {
            leader.map((item, index) => {
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

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'gray',
      margin:5,
      padding:5
    },
    text:{
      alignSelf:'center',
      color:'black',
      fontSize:20
      
  },
    content:{
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
  
  });
  export default Ranking;