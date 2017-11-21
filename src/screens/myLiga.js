import React, { Component } from 'react';
import {Text,View,Button,Image,ImageBackground,StyleSheet} from 'react-native'
import LigaList from '../components/LigaList'
import { connect } from 'react-redux';
import { addPerson, deletePerson } from '../../actions';
 class MyLiga extends Component {
  constructor(props) {
    super(props)
  }
  navigateTo(name,ligaName)
  {
    this.props.navigation.navigate(name,{name:ligaName});
  }
  render() {
    return (
       <ImageBackground source={require('../images/field.jpg')} style={styles.container}>
        <LigaList ligaProps={this.props.liga} goToLiga={()=>this.navigateTo('Liga',this.props.liga[0].name)} />
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
      liga: state.liga.liga
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      dispatchAddPerson: (person) => dispatch(addPerson(person)),
      dispatchdeletePerson: (person) => dispatch(deletePerson(person))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyLiga)