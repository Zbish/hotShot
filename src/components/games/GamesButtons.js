import React, { Component } from 'react';
import { View,Text,StyleSheet,Button} from 'react-native'
import _ from 'lodash';
import {arrangeButtons} from '../../utils'


export default class GamesButtons extends Component {
  constructor(props) {
    super(props)
  }

  renderIf(condition, content) {
    if (condition) {
      return content;
    } else {
      return null;
    }
  }

  render() {
      const item = this.props.gamesSchedule
      const roundsNames =   arrangeButtons(item)
    console.log(roundsNames)
    return (
      <View style={styles.container}>
          {
            roundsNames.map((key,index) => {
                              return <Button
                                        style={[ margin=5,padding=5]}
                                          key={index}
                                          title={key}
                                          onPress={()=>{}}
              />
            })
              
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    button:{

    }
});