import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'
import friends from'../data/friends'
import _ from 'lodash';

function getIndex(code)
{
  var codes = _.findIndex(friends, function(o) { return o.code == code; });
    return  codes

}
export default class Rank extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      const item = this.props.item
      const place = this.props.place
      const player =  friends[getIndex(item.playerCode)]
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <View style={styles.rankContainer}> 
              <Text>{place}</Text>
                <Image style={styles.rank} source={require('../images/users/caspi.jpg')}></Image>
                <Text>{player.name}</Text> 
                <Text>{'    '}{item.points}</Text> 
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
        justifyContent: 'space-between',
    },
    Text:{
        alignSelf:'center'  
    },
    logo:{
        width:35,
        height:35
    },
    teame:{
        alignItems:'center'
    },
    rankContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    rank:{
        width:40,
        height:40,
        borderWidth:1, 
        borderColor: 'black',
        borderRadius:50,
        margin:5
    },

  });