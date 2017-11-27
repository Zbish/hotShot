import React, { Component } from 'react'
import {Text,View,Button,Image,ImageBackground,StyleSheet} from 'react-native'
import LigaList from '../components/LigaList'
import { connect } from 'react-redux'
import { addPerson, deletePerson } from '../../actions'
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
      const {liga} = this.props
 
    return (
       <ImageBackground source={fieldImage} style={styles.container}>
        {
            liga.map((item, index) => {
                            return <LigaList 
                                        key={index} item={item}
                                        listligaProps={liga[index]}      
                                        navigateToLiga={()=>this.navigateTo('Liga',index,liga[index].name)}
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