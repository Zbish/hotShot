import React, { Component } from 'react'
import {Text,View,Button,Image,ImageBackground,StyleSheet} from 'react-native'
import LigaList from '../components/LigaList'
import { connect } from 'react-redux'
import { addPerson, deletePerson } from '../actions'
import fieldImage from '../images/app/field.jpg'
 class MyLiga extends Component {
  constructor(props) {
    super(props)
  }
  navigateTo(name,index,ligaName)
  {
    this.props.navigation.navigate(name,{index:index,liganame:ligaName});
  }
  render() {
    const {leagues} = this.props.leagues

    return (
       <ImageBackground source={fieldImage} style={styles.container}>
        {
          leagues.map((item, index) => {
                            return <LigaList
                                        key={index} item={item}
                                        listligaProps={leagues[index]}
                                        navigateToLiga={()=>this.navigateTo('Liga',index,leagues[index].name)}
            />
          })
        }
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
  function mapStateToProps (state) {
    return {
      leagues: state.leagues
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyLiga)