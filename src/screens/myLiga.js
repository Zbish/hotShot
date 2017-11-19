import React, { Component } from 'react';
import {Text,View,Button,Image,ImageBackground,StyleSheet} from 'react-native'
import LigaList from '../components/LigaList'
export default class MyLiga extends Component {
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
        <LigaList goToLiga={()=>this.navigateTo('Liga')} />
        <Button title='Add LIga' onPress={()=>this.navigateTo('AddLiga')}></Button>
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