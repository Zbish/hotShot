import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {TextInput,
        Text,
        View,
        Button,
        Image,
        ImageBackground
} from 'react-native'
import LoginForm from '../components/LoginForm'
export default class LoginPage extends Component {
  constructor(props) {
    super(props)
  }
  navigateTo(name)
  {
    this.props.navigation.navigate(name);
  }

  render() {
    return (
      <ImageBackground source={require('../images/field.jpg')} style={styles.container}>
         <Image source={require('../images/hotshot.png')} style={styles.logo}>
              </Image>
        <LoginForm />
           <Button title='go to my liga' onPress={() => this.navigateTo("MyLiga")}>
        </Button>
      </ImageBackground>
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
    logo:{
      width:200,
      height:200
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