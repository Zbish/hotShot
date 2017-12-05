import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'
import friends from'../data/friends'
import _ from 'lodash';

function getIndex(code)
{
  var codes = _.findIndex(friends, function(o) { return o.code == code; });
    return  codes

}
const RankLeader = ({item,place}) => {
    const player =  friends[getIndex(item.playerCode)]
    return (
            <View style={styles.rankContainer}> 
                <Image style={styles.rank} source={require('../images/users/caspi.jpg')}></Image>
                <Text>{place}</Text> 
                <Text>{player.name}</Text> 
                <Text>{item.points}</Text> 
        </View>
    );
  }

const styles = StyleSheet.create({
    rankContainer:{
        alignItems:'center'
    },
    rank:{
        width:100,
        height:100,
        borderWidth:1, 
        borderColor: 'black',
        borderRadius:50,
    },

  });
  export default RankLeader;