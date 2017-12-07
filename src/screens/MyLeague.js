import React, { Component } from 'react'
import {Text,View,Button,Image,ImageBackground,StyleSheet} from 'react-native'
import LeagueList from '../components/LeagueList'
import { connect } from 'react-redux'
import { addPerson, deletePerson, setCurrentLeague } from '../actions'
import fieldImage from '../images/app/field.jpg'
 class MyLeague extends Component {
  constructor(props) {
    super(props)
  }
  navigateTo(name,index,leagueName)
  {
    this.props.navigation.navigate(name,{index:index,leaguename:leagueName});
  }
  selectLeague(league) {
    this.props.setCurrentLeague(league.name);
    this.props.navigation.navigate('League',{title:league.name});
  }

  render() {
    const {leagues} = this.props.leagues

    return (
       <ImageBackground source={fieldImage} style={styles.container}>
        {
          leagues.map((league, index) => {
                            return <LeagueList
                                        key={index} item={league}
                                        league={league}
                                        onPress={(league)=>this.selectLeague(league)}
            />
          })
        }
        <Button title='Add League' onPress={()=>this.navigateTo('AddLeague')}></Button>
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
  });

  
  function mapStateToProps (state) {
    return {
      leagues: state.leagues
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      setCurrentLeague: (name) => dispatch(setCurrentLeague(name))
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyLeague)