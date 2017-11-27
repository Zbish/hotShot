import React, { Component } from 'react';
import {Text,
        View,
        StyleSheet,
        ScrollView} from 'react-native'
import Games from '../components/Games'
import Ranking from '../components/Ranking'
import { connect } from 'react-redux';
// import { addPerson, deletePerson } from '../../actions';

class Liga extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.liganame}`,
  });
  comparedates(date1,date2){
    var d1 = new Date(date1)
    var d2 = new Date(date2)
    if(d1.getDate() === d2.getDate())
      {
        console.log('abig')
      }
      else{
        console.log('small')
      }
  }
  getGameNum(num){
    console.log('num', num)
  }
  render() {
    const liga = this.props.liga
    const teams = this.props.team
    const index = this.props.navigation.state.params.index
    return (
      <ScrollView style={styles.container}>
          <Games gamesList={liga[index].games} teams={teams} getMatchNum={(match)=>this.getGameNum(match)}></Games>
          <Ranking RankList={liga[index].players} ></Ranking>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });

  function mapStateToProps (state) {
    return {
      liga: state.liga.liga,
      team:state.team
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
  )(Liga)