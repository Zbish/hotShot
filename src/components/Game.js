import _ from 'lodash'
import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,TouchableHighlight} from 'react-native'
import flags from '../images/Flags'
import {getTimeOfDay} from '../utils';
import {teams} from '../data'
import ChangeScore from '../components/ChangeScore'

export default class Game extends Component {
  render() {
    const {item} = this.props;
    const team1 = _.find(teams, {code: item.team1})
    const team2 = _.find(teams, {code: item.team2})
    return (
      <TouchableHighlight style={styles.wrapper} underlayColor='grey' onPress={()=>this.props.onPress(item)} >
        <View style={styles.container}>
        <View style={styles.team}>
                   <Image source={flags[team1.name]} style={styles.logo}></Image>
                    <Text style={styles.teamName}>{team1.name}</Text>
              </View>
              <ChangeScore changeGameScoreTo={(value)=>this.props.changeGameScoreTo({match:item.match,team:1,score:value})}></ChangeScore>
              <View style={styles.scoreContainer}>
                  <Text style={styles.Text}>Match {item.match}</Text>
                  <Text style={styles.score}>{item.score.team1} : {item.score.team2}</Text>
                  {/* <Text style={styles.score}>{getTimeOfDay(item.date)}</Text> */}
                  <Text style={styles.Text} >Group {item.group}</Text>
              </View>
              <ChangeScore changeGameScoreTo={(value)=>this.props.changeGameScoreTo({match:item.match,team:2,score:value})}></ChangeScore>
              <View style={styles.team}>
                    <Image source={flags[team2.name]} style={styles.logo}></Image>
                    <Text style={styles.teamName}>{team2.name}</Text>
              </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {

    },
    container:{
      backgroundColor: '#EAEDED',
      flexDirection:'row',
      padding:10
    },
    team:{
      alignItems:'center',
      flexDirection:'column',
      flex:3
  },
  teamName:{
        alignSelf:'center',
        color:'#212121'
    },
    logo:{
        width:30,
        height:18
    },
   scoreContainer:{
    alignItems:'center',
    flex:3
   },
    score:{
        flex:1,
        alignSelf:'center',
        color:'#212121'
    },
    Text:{
      fontSize:12,
     
    }
  });