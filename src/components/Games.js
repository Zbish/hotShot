import React, { Component } from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native'
import Game from '../components/Game'
import _ from 'lodash';
import {withoutTime} from '../utils';
import moment from 'moment';

export default class Games extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
                  <Text style={styles.ligaData}>{moment(date).format('MMMM Do YYYY')}</Text>
                </View>
                {
                  games.map((item, index) => {
                  return <Game key={index}
                              item={item}
                              onPress={(item)=>this.props.onPress(item)}

                  />
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
      margin:5,
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
    ligaData:{
        alignSelf:'center',
        color:'black',

    },

  });