import _ from 'lodash'
import React, { Component } from 'react';
import {Text,View,StyleSheet,Slider} from 'react-native'



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
    if(!this.props.item.bets.length)
      {
        item ={
          playerCode: 1,
          guess: {
            team2: '-',
            team1: '-'
          }
      }
    }
    else{
      item = this.props.item.bets[0]
    }
    var startvalue = item.guess.team1
    var startValue2 = item.guess.team2
    if(isNaN(startvalue))
      {
        startvalue = 0
        startValue2 = 0
      } 
    return (
        <View style={styles.betComponent}>
     
                  <Slider 
                  style={styles.sliders}
                      step={1}
                      minimumValue={0}
                      maximumValue={10}
                      value={startvalue}
                      onValueChange={(val) => this.onSlideTeam1(val)}
                      thumbImage={require('../images/app/football3.png')}
                      thumbTintColor={'#FF5722'}
                      minimumTrackTintColor={'#4CAF50'}
                      maximumTrackTintColor={'#FF5722'}
                      disabled={false}
                    />
                   
                    <Text style={styles.score}>{item.guess.team1} : {item.guess.team2}</Text>
                    <Slider 
                    style={styles.sliders}
                      step={1}
                      minimumValue={0}
                      maximumValue={10}
                      value={startValue2}
                      onValueChange={(val) => this.onSlideTeam2(val)}
                      thumbTintColor={'#FF5722'}
                      minimumTrackTintColor={'#4CAF50'}
                      maximumTrackTintColor={'#FF5722'}
                      disabled={false}
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
        backgroundColor: '#FF5722',
    },
    sliders:{
    flex:4,
    
    }
  });