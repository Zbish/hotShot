import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ImageBackground,
  TextInput
} from 'react-native'
import { connect } from 'react-redux';
import {
  addNewLeague,
  addPlayerToNewLeague,
  addGameToNewLeague,
  changeNameOfNewLeague
} from '../actions';
import AddFriend from '../components/AddFriends'
import AddGames from '../components/AddGames'
import styles from './addLeague.style';

class addLeague extends Component {
  addLeague() {
    this.props.addNewLeague();
    this.props.navigation.navigate("MyLeague");
  }
  addPlayer(player) {
    this.props.addPlayer(player);
  }
  addGame(game) {
       var newGame = {gameNumber:game.match,bets:[]}    
       this.props.addGame(newGame);
  }
  onChange(name) {
    this.props.changeName(name);
  }

  render() {
    return (
      <ImageBackground source={require('../images/app/field.jpg')} style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.sub1}>
            <TextInput underLineColorAndroid='transparent'
              placeholderTextColor="black"
              placeholder='league name'
              style={styles.textInput}
              onChangeText={(val) => this.onChange(val)}
              value={this.props.leagues.newLeague.name}
            />
          </View>
          <View style={styles.sub2}>
            <AddFriend friends={this.props.friends}
              addPlayer={(name) => this.addPlayer(name)} />
            <View style={styles.friendsInleague}>
              <Text style={styles.text}>Players :</Text>
              {
                this.props.leagues.newLeague.players.map((item, index) => {
                  return <Text style={styles.text}
                    key={index}
                    item={item}>{item.name},</Text>
                })
              }
            </View>
          </View>
          <View style={styles.sub3}>
            <View style={styles.gamesInleague}>
              <Text style={styles.text}>Games : {this.props.leagues.newLeague.games.length}</Text>
            </View>
            <AddGames style={styles.games} games={this.props.games} teams={this.props.team} addGame={(game) => this.addGame(game)} />
          </View>

          <Button title={'Add league'} color='#FF5722' onPress={() => this.addLeague()} ></Button>
        </View>

      </ImageBackground>
    );
  }
}


function mapStateToProps(state) {
  return {
    leagues: state.leagues,
    games: state.games,
    team: state.team,
    friends: state.friends
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewLeague: (league) => dispatch(addNewLeague(league)),
    addPlayer: (name) => dispatch(addPlayerToNewLeague(name)),
    addGame: (game) => dispatch(addGameToNewLeague(game)),
    changeName: (name) => dispatch(changeNameOfNewLeague(name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(addLeague)