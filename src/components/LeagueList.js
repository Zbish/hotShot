import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native'
import Ball from '../images/app/football.png'
export default class LeagueList extends Component {
    render() {

        const { players, games, name} = this.props.league
        return <TouchableHighlight style={styles.wrapper} underlayColor='grey' onPress={() => this.props.onPress(this.props.league)}>
            <View style={styles.container}>
                <Image style={styles.footBallPic} source={Ball}></Image>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.text}>players: {players.length}</Text>
                <Text style={styles.text}>games: {games.length}</Text>
            </View>
        </TouchableHighlight>
    }
}
const styles = {
    wrapper: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgb(242, 242, 242)',
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    container: {
        flexDirection: 'row',
    },

    text: {
        color: '#696969',
        margin: 5,
        fontSize: 15,
    },
    title: {
        color: 'green',
        margin: 5,
        fontSize: 20,
    }
    ,
    footBallPic: {
        width: 50,
        height: 50,
    },
}