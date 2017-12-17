import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import _ from 'lodash';
import Games from './Games'
import { arrangeButtons } from '../../utils'


export default class GamesButtons extends Component {
    constructor(props) {
        super(props)
    this.state ={listo : this.props.gamesSchedule.round1} 
    }

    
    onPress(value) {
        var list = this.props.gamesSchedule[`${value}`]
            this.setState({listo:list})
    }
    render() {
        const listo = this.props.gamesSchedule.round1
        const item = this.props.gamesSchedule
        const roundsNames = arrangeButtons(item)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    {
                        roundsNames.map((key, index) => {
                            return <Button
                                style={styles.buttons}
                                key={index}
                                title={key}
                                onPress={() => this.onPress(key)}
                            />
                        })
                    }
                </View>
                <View style={styles.games}>
                    <Games gamesList={this.state.listo}
                        onPress={() => { }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',


    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    games: {

    },
    buttons: {
        margin: 5,
        padding: 5
    }
});