import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native'
import friends from'../../data/friends'
import _ from 'lodash';
import {getIndex,imageBorder} from '../../utils'

export default class RankLeader extends Component {

    render(){
    const place = this.props.place
    const item = this.props.item
    const player =  friends[getIndex(item.playerCode,friends)]
    return (
            <View style={styles.rankContainer}>
                <Text style={styles.text}>{place}</Text>  
                <Image style={[imageBorder(place),styles.image]} source={require('../../images/users/caspi.jpg')}></Image>
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
        borderWidth:4, 
        borderRadius:60,
    },
    text:{
        fontSize:15,
        fontWeight: 'bold',
        color:'#FFFFFF'
    }
    
  });