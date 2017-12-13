import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Game from './Game'
import _ from 'lodash';
import { withoutTime, } from '../../utils';
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
    let betsComp = false
    if ('bets' in this.props.gamesList[0]) {
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
                  <Text style={styles.text}>{moment(date).format('dddd ,LL')}</Text>
                </View>
                <FlatList
                          data={games}
                          renderItem={({ item }) => <Game item={item}
                          changeGameScoreTo={(value) => this.props.changeGameScoreTo(value)}
                          chengeMyBet={(value,match)=>this.props.chengeMyBet(value,match)}
                          onPress={(item) => this.props.onPress(item)}/>}
                          keyExtractor={(item, index) => index}
                        />
              </View>
            )
          }
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C8E6C9',
    marginTop: 5,
  },
  dateContainer: {
    backgroundColor: '#BDBDBD',
  },
  text: {
    alignSelf: 'center',
    color: '#212121',
    fontWeight: 'bold'
  },
});