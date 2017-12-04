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
function getPoints(array)
{
  console.log('hh' , array)
  var finish = array.bats.players
  var games = array.round1 
  var Allplayers = array.players
  for(i = 0 ; i < games.length ; i++)
    {
      var bats = array.games[i].bats
      var score = array.games[i].score
      var players =  Allplayers.slice(0)
      for(j = 0 ; j < bats.length ; j++){
          if(bats[j].team1 == score.team1 && bats[j].team2 == score.team2 ){
            for(h = 0 ; h < players.length ; h++)
              {
                if(players[h].code == bats[j].playerCode){
                  for(k = 0 ; k < finish.length ; k++){
                    if(players[h].code == finish[k].code){
                      finish[k].points += 2
                     
                  }
                }
               
                }
                
              }
          }
          else if(bats[j].team1 == bats[j].team2  && score.team1 == score.team2 ){
            for(h = 0 ; h < players.length ; h++)
              {
                if(players[h].code == bats[j].playerCode){
                  for(k = 0 ; k < finish.length ; k++){
                    if(players[h].code == finish[k].code){
                      finish[k].points += 1
                     
                  }
                }
               
                }
                
              }
          }
          else if(bats[j].team1 > bats[j].team2  && score.team1 > score.team2 || bats[j].team1 < bats[j].team2  && score.team1 < score.team2 ){
            for(h = 0 ; h < players.length ; h++)
              {
                if(players[h].code == bats[j].playerCode){
                  for(k = 0 ; k < finish.length ; k++){
                    if(players[h].code == finish[k].code){
                      finish[k].points += 1
                     
                  }
                }
               
                }
                
              }
          }
      }
     
    }
    return finish
}
const Ranking =(props) => {
     var playerPoints =  getPoints(props.RankList)
     var players = sort(playerPoints)
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