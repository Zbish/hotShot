import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'

const RankLeader = ({item,place}) => {
    return (
            <View style={styles.rankContainer}> 
                <Image style={styles.rank} source={require('../images/users/caspi.jpg')}></Image>
                <Text>{place}</Text> 
                <Text>{item.name}</Text> 
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