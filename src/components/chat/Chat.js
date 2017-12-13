import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    FlatList,
    ImageBackground
  } from 'react-native';
import Messege from './Messege'

export default class Chat extends Component {
  render() {
    var messeges = ['dededdeded','dedededded','dededdeded','dedededded','dededdede','dededdeded','dedededded','dededdede','dededdeded','dedededded','dededdede']
    return (
      <ImageBackground source={require('../../images/app/field.jpg')} style={styles.wrapper}>
          <FlatList
                          data={messeges}
                          style={styles.scroll}
                          renderItem={({ item }) => <Messege item={item}
                          onPress={(item) => this.props.onPress(item)}/>}
                        />
          <TextInput style={styles.textInput}></TextInput>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    alignSelf: 'stretch',
    minHeight:400,
  },
  scroll:{
    maxHeight:400
  },
  textInput: {
    color: '#000000',
    alignSelf: 'stretch',
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#fff',
    borderWidth: 1,
  }
  });
