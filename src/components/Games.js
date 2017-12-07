import React, { Component } from 'react';
import {Text,View,StyleSheet,FlatList,Slider} from 'react-native'
import Game from '../components/Game'
import Bets from '../components/Bets'
import _ from 'lodash';
import {withoutTime} from '../utils';
import moment from 'moment';

export default class Games extends Component {
  constructor(props) {
    super(props)
  }
  renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}
  render() {
   
    var betsComp = false
    if('bets' in this.props.gamesList[0])
      {
        betsComp = true
      }
    const gamesByDate = _.chain(this.props.gamesList)
                          .sortBy(["date"])
                          .groupBy(game => {
                            return withoutTime(game.date);
                          }).value()
    return (
      <View style={styles.container}>
        {
          _.map(gamesByDate, (games, date) => {
            return (
              <View key={date}>
                <View style={styles.dateContainer}>
                  <Text style={styles.leagueData}>{moment(date).format('MMMM Do YYYY')}</Text>
                </View>
                {
                  games.map((item, index) => {
                  return (
                    <View key={index}>
                  <Game item={item}
                        onPress={(item)=>this.props.onPress(item)}
                        
                  ></Game>
                  {this.renderIf(betsComp, 
                    <Bets item={item} onSlide={(value)=>this.props.chengeMyBet(value,item.match)}></Bets>
                    
                )}
                  </View>
                  )
                })
              }
            </View>
          )}
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'gray',
      padding:5,
      borderColor: '#fff',
      borderRadius: 10,
      borderWidth: 0.6,
    },
    dateContainer:{

          },
    header:{
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    leagueData:{
        alignSelf:'center',
        color:'black',

    },
  });