import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'
import friends from'../data/friends'
import _ from 'lodash';
import {getIndex} from '../utils'

export default class RankLeader extends Component {

    render(){
    const place = this.props.place
    const item = this.props.item
    const player =  friends[getIndex(item.playerCode,friends)]
    return (
            <View style={styles.rankContainer}> 
                <Image style={styles.image} source={require('../images/users/caspi.jpg')}></Image>
                <Text style={styles.text}>{place}</Text> 
                <Text style={styles.text}>{player.name}</Text> 
                <Text style={styles.text}>{item.points}</Text> 
        </View>
    );
  }
}
const styles = StyleSheet.create({
    rankContainer:{
        alignItems:'center',
    },
    image:{
        width:100,
        height:100,
        borderWidth:1, 
        borderColor: 'black',
        borderRadius:50,
    },
    text:{
        fontSize:15,
        fontWeight: 'bold',
        color:'#ffd700'
    }
    
  });