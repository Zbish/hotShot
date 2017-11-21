import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight,ImageBackground } from 'react-native';
export default class LigaList extends React.Component {

    constructor(props) {
        super(props);
    }
    numOfPlayers(arrayOfPlayers){
        
    }
    render() {
        return  <TouchableHighlight style={styles.highLight} underlayColor='grey' onPress={()=>this.props.goToLiga()}>
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.ligaProps[0].name}</Text>
                        <ImageBackground  style={styles.footBallPic} source={require('../images/football.png')}>
                                    <Text style={styles.textRank}> 1 </Text>
                        </ImageBackground >
                    </View>
                    <View style={styles.dataRow}>
                        <View style={styles.textCont}>
                        <Text style={styles.text}>Players : {this.props.ligaProps[0].players.length}</Text>
                        <Text style={styles.text}>games : {this.props.ligaProps[0].games.length}</Text>
                        </View>
                        <Text style={styles.text}></Text>
                    </View>
                </View>  
                </TouchableHighlight>
       
    }
}


const styles = {
    highLight:{
        borderRadius:10,
        borderWidth:1, 
        borderColor: 'black',
        backgroundColor: 'rgb(242, 242, 242)',
        margin:10,
        flexDirection:'row',
        alignSelf:'stretch',
    },
    wrapper:{
        flexDirection:'row',
    },
    container: {
   
        margin:10,
        
    },
    text: {
        color: '#696969',
        padding:5,
        margin:5,
        fontSize: 15,
    },
    leaderText:{
        color: '#696969',
        padding:5,
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
        width:60,
        height:60,
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
    textCont:{
        flexDirection:'row'
    }

}
