import React, { Component } from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native'
import Game from '../components/Game'

export default class Games extends Component {
  constructor(props) {
    super(props)
  }
  gameNum(num)
  {
    this.props.getMatchNum(num)
  }
  render() {
    var tempDate = new Date(this.props.gamesList[0].Date);
    return (
      <View style={styles.container}>
           <View style={styles.dateContainer}>
              <Text style={styles.ligaData}>{tempDate.toLocaleDateString()}</Text>
          </View>
          {
            this.props.gamesList.map((item, index) => {
            return <Game key={index}
                         item={item}
                         teams={this.props.teams}
                         gamenum={(num)=>this.gameNum(num)}

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