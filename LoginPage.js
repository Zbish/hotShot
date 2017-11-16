import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Text,View,Button} from 'react-native'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
  }
  navigateTo(name)
  {
    this.props.navigation.navigate("AddLiga");
  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to hot shot bet
        </Text>
        <Text style={styles.instructions}>
         let go play
         login page
        </Text>
        <Button title='go to my liga' onPress={() => navigate("MyLiga")}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });