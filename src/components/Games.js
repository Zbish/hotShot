import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Game from '../components/Game'
import Bets from '../components/Bets'
import _ from 'lodash';
import { withoutTime, } from '../utils';
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
                {
                  games.map((item, index) => {
                    return (
                      <View key={index}>
                        <Game item={item}
                          onPress={(item) => this.props.onPress(item)}
                          changeGameScoreTo={(value) => this.props.changeGameScoreTo(value)}      
                        ></Game>
                        {this.renderIf(betsComp,
                          <Bets item={item}
                                 onSlide={(value) => this.props.chengeMyBet(value, item.match)}
                          ></Bets>

                        )}
                        {/* <FlatList
                          data={games}
                          renderItem={({ item }) => <Game item={item}
                          onPress={(item) => this.props.onPress(item)}/>}
                        /> */}
                      </View>
                    )
                  })
                }
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