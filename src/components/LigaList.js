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
                    <Text style={styles.text}>{this.props.ligaProps[0].name}</Text>
                    <Text style={styles.text}>PLayers : {this.props.ligaProps[1].Players}</Text>
                    <Text style={styles.text}>Games{this.props.ligaProps[2].Games}</Text>
                    <Text style={styles.text}>Leading :{this.props.ligaProps[3].Leading}</Text>
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