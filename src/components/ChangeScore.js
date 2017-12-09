import React, { Component } from 'react';
import {Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput} from 'react-native'
import Games from './Games'
export default class changeScore extends Component {
  render() {
    return (
          <View style={styles.wraper}>
            <Button title={'+'}
                    color="#212121"
                    onPress={()=>this.props.changeGameScoreTo(1)}
            ></Button>
            <Button title={'-'}
                    color="#757575"
                    onPress={()=>this.props.changeGameScoreTo(-1)}
          ></Button>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
     flexDirection:'row'
    },
    Button:{
      
    }
  });
