import React, { Component } from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'
import Rank from '../components/Rank'

export default class Ranking extends Component {
  constructor(props) {
    super(props)
  }
  leaderBoard(array){
    array.sort((a, b) => a.points < b.points)   
    return (array)
  }
  splitArray(array){
    losers = []  
    for(i=3 ; i < array.length ; i++)
        {
           losers.push(array[i]) 
        }
        return(losers)
  }
  render() {
     var leader = this.leaderBoard(this.props.RankList)
     var losers = this.splitArray(leader)
    return (
      <View style={styles.container}>
           <View style={styles.datacont}>
          <Text style={styles.ligaData}>LeaderBoard</Text>
          </View>
          <View style={styles.header}>
            <View style={styles.rankContainer}> 
                <Image style={styles.rank} source={require('../images/caspi.jpg')}></Image>
                <Text>2</Text> 
                <Text>{leader[1].name}</Text> 
                <Text>{leader[1].points}</Text> 
            </View>
            <View style={styles.rankContainer}> 
                <Image style={styles.ranknum1} source={require('../images/shi.jpg')}></Image>
                <Text>1</Text>
                <Text>{leader[0].name}</Text>
                <Text>{leader[0].points}</Text>  
            </View>
            <View style={styles.rankContainer}> 
                <Image style={styles.rank} source={require('../images/nizan.jpg')}></Image>
                <Text>3</Text>
                <Text>{leader[2].name}</Text> 
                <Text>{leader[2].points}</Text> 
            </View>
          </View>
          {
            losers.map((item, index) => {
            return <Rank key={index} item={item}
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
    ligaData:{
        alignSelf:'center',
        color:'black',
        fontSize:20
        
    },
    datacont:{

    },
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
    ranknum1:{
        width:120,
        height:120,
        borderWidth:1, 
        borderColor: 'black',
        borderRadius:60,
    }
  });