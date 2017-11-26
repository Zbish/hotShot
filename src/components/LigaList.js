import React, { Component } from 'react'
import { View,
         Text,
         TextInput,
         StyleSheet,
         TouchableHighlight,
         ImageBackground } from 'react-native'
import Ball from '../images/app/football.png'
 const LigaList = ({listligaProps,navigateToLiga }) => {
    const {players,games,name} = listligaProps

        return  <TouchableHighlight style={styles.highLight} underlayColor='grey' onPress={()=>navigateToLiga()}>
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{name}</Text>
                        <ImageBackground  style={styles.footBallPic} source={Ball}>
                                    <Text style={styles.textRank}> 1 </Text>
                        </ImageBackground >
                    </View>
                    <View style={styles.dataRow}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>players: {players.length}</Text>
                                <Text style={styles.text}>games: {games.games.length}</Text>
                            </View>
                    </View>
                </View>  
                </TouchableHighlight>
}
const styles = {
    highLight:{
        borderRadius:10,
        borderWidth:1, 
        borderColor: 'black',
        backgroundColor: 'rgb(242, 242, 242)',
        margin:5,
        flexDirection:'row',
        alignSelf:'stretch',
    },
    wrapper:{
        flexDirection:'row',
    },
    container: {
        margin:5,
    },
    text: {
        color: '#696969',
        margin:5,
        fontSize: 15,
    },
    leaderText:{
        color: '#696969',
        margin:5,
        fontSize: 15,

    },
    title:{
        color: 'green',
        margin:5,
        fontSize: 20,
    }
    ,
    footBallPic:{
        width:50,
        height:50,
    },
    textRank:{
        color:'orange',
        alignSelf:'center',
        fontSize: 40,
        textAlign: 'center',
        padding:5,
        fontWeight: 'bold'
    },
    dataRow:{
        flexDirection:'column',
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center',
    },
    textContainer:{
        flexDirection:'row'
    }

}
export default LigaList;