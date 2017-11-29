import React, { Component } from 'react';
import {Text,
        View,
        StyleSheet,
        ScrollView} from 'react-native'
import Games from '../components/Games'
import Ranking from '../components/Ranking'
import { connect } from 'react-redux';
import { compareDates } from '../utils';
// import { addPerson, deletePerson } from '../../actions';

class League extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.liganame}`,
  });
  getGameNum(num){
    console.log('num', num)
  }
  render() {
    const league = this.props.leagues.league
    const teams = this.props.teams

    return (
      <ScrollView style={styles.container}>
          <Games gamesList={league[index].games} teams={teams} getMatchNum={(match)=>this.getGameNum(match)}></Games>
          <Ranking RankList={league[index]} ></Ranking>
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
      leagues: state.leagues,
      teams:state.teams
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
  )(League)