import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'
import friends from '../data/friends'
import _ from 'lodash';
import { getIndex } from '../utils'

export default class Rank extends Component {
    render() {
        const item = this.props.item
        const place = this.props.place
        const player = friends[getIndex(item.playerCode, friends)]
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.text}>{place}</Text>
                    <Image style={styles.image} source={require('../images/users/caspi.jpg')}></Image>
                    <Text style={styles.text}>{player.name}</Text>
                    <Text style={styles.text}>{'    '}{item.points}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        margin: 1,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'


    },
    image: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        margin: 5
    },
    text:{
        fontSize:15,
        fontWeight: 'bold',
        color:'#000000'
    }
});