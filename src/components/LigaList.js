import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, } from 'react-native';
export default class LigaList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <View style={styles.container}>
            <TouchableHighlight style={styles.button1} underlayColor='grey' onPress={()=>this.props.goToLiga()}>
                <View style={styles.cont}>
                    <Text style={styles.text}>the israeli liga</Text>
                    <Text style={styles.text} >member in the liga : 10</Text>
                    <Text style={styles.text} >games 10/25</Text>
                    <Text style={styles.text} >leading : dor rabba in 5 points</Text>
                </View>
            </TouchableHighlight>
        </View>
    }
}


const styles = {
    button1:{
        borderColor:'#fff',
        borderRadius:5,
        borderWidth:1, 
        borderColor: 'black',
        backgroundColor: 'rgb(242, 242, 242)',
        margin:2
    },
    container: {
        alignSelf: 'stretch',
        margin:10,
    },
    text: {
        color: '#000000',
        padding:5
    },
}