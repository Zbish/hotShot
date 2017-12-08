import React, { Component } from 'react';
import {Text,
        View,
        StyleSheet,
        ScrollView} from 'react-native'
import Games from '../components/Games'
import Ranking from '../components/Ranking'
import { connect } from 'react-redux';
import { compareDates,getLeagueGames,getRanking } from '../utils';
import {
  chengeBet,changeGameScore
} from '../actions';

class League extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  changeMyBet(value,match){
    const bet = {value,match:match,leagueName:this.props.league.name,playerCode:1}
    this.props.chengeBet(bet)
  }
  changeGameScoreTo(newScore){
    this.props.changeGameScore(newScore)
  }
  render() {  
    const games = getLeagueGames(this.props)
    const rankList = getRanking(games)
    return (
      <ScrollView style={styles.container}>
          <Ranking rankList={rankList}></Ranking>
          <Games gamesList={games} 
                 chengeMyBet={(value,match)=>this.changeMyBet(value,match)} 
                 changeGameScoreTo={(newScore)=>this.changeGameScoreTo(newScore)} 
                 ></Games>
                 
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
      chengeBet: (newBet) => dispatch(chengeBet(newBet)),
      changeGameScore: (newScore) => dispatch(changeGameScore(newScore)),
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(League)