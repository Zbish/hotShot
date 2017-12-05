import _ from 'lodash'
import React, { Component } from 'react';
import {Text,View,Slider,StyleSheet} from 'react-native'


export default class Bets extends Component {
  onSlideTeam1(value){
    const obj = {bet:value,team:1}
   this.props.onSlide(obj)
  }
  onSlideTeam2(value){
    const obj = {bet:value,team:2}
    this.props.onSlide(obj)
   }
  render() {
    var item
    console.log('ggggg' , this.props.item)
    if(!this.props.item.bets)
      {
        item ={
          playerCode: 1,
          guess: {
            team2: 0,
            team1: 0
          }
      }
    }
    else{
      item = this.props.item.bets[0]
    }
    console.log('hhhh' , item)
    return (
        <View style={styles.betComponent}>
                  <Slider 
                  style={styles.sliders}
                      step={1}
                      minimumValue={0}
                      maximumValue={10}
                      value={item.guess.team1}
                      onValueChange={(val) => this.onSlideTeam1(val)}
                    />
                    <Text style={styles.score}>{item.guess.team1} : {item.guess.team2}</Text>
                    <Slider 
                    style={styles.sliders}
                      step={1}
                      minimumValue={0}
                      maximumValue={10}
                      value={item.guess.team2}
                      onValueChange={(val) => this.onSlideTeam2(val)}
                    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    betComponent:{
        flexDirection:'row',
      },
      score:{
        alignSelf:'center',
        padding:2,
        color:'black',
        fontSize:15,
        backgroundColor: '#FC9F5B',
    },
    sliders:{
    flex:4
      
    }
  });