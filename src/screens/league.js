import React, { Component } from 'react';
import {Text,
        View,
        StyleSheet,
        ScrollView} from 'react-native'
import Games from '../components/Games'
import Ranking from '../components/Ranking'
import { connect } from 'react-redux';
import { compareDates,getLeagueGames } from '../utils';
// import { addPerson, deletePerson } from '../../actions';

class League extends Component {
  // static navigationOptions = ({ navigation, leagues }) => ({
  //   title: `${leagues.currentLeague.name}`,
  // });
  render() {
    const games = getLeagueGames(this.props)
    return (
      <ScrollView style={styles.container}>
          <Games gamesList={games}></Games>
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
      league: state.leagues.currentLeague,
      teams:state.teams,
      gamesSchedule:state.gamesSchedule
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