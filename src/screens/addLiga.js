import React, { Component } from 'react';
import {Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput} from 'react-native'
import { connect } from 'react-redux';
import { addNewLiga } from '../../actions';
import AddFreind from '../components/AddFreinds'
import AddGames from '../components/AddGames'

 class AddLiga extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.setState({
      ligaName: "",
         players:[],
         myGames:[]
    });
  }
  addLiga()
  {
    const newLiga = {name:this.state.ligaName,
                     players:this.state.players,
                     games:{name:'house 7',date:'sunday 25/7/18',game:"20",games:this.state.myGames}
                    }
    this.props.addNewLiga(newLiga)
    this.props.navigation.navigate("MyLiga");
  }
  addPlayer(name){
    var players  = this.state.players;
    players.push(name)
    this.setState({players : players})
  }
  addGame(game){
    var games  = this.state.myGames;
    games.push(game)
    this.setState({myGames : games})
  }
  onChange(val) {
    this.setState({ ligaName: val })
  }
  render() {
    return (
      <ImageBackground source={require('../images/app/field.jpg')} style={styles.container}>
        <TextInput underLineColorAndroid='transparent'
                   placeholderTextColor="black"
                   placeholder='liga name' 
                   style={styles.textInput}
                   onChangeText={(val) => this.onChange(val)}
                   value={this.state.ligaName}
        />
          <AddFreind freinds={this.props.freinds.freinds} addPlayer={(name)=>this.addPlayer(name)} />
            <View style={styles.freindsInLiga}>
              <Text style={styles.text}>Players :</Text>
                    {
                    this.state.players.map((item, index) => {
                                    return <Text style={styles.text} key={index} item={item}>{item.name},</Text>
                  })
                }
            </View>
          <AddGames allgames={this.props.AllGames.allGames} addgame={(game) => this.addGame(game)} />
          <View style={styles.gamesInLiga}>
              <Text style={styles.text}>Games :</Text>
                    {
                    this.state.myGames.map((item, index) => {
                                    return <Text style={styles.text} key={index} item={item}>{item.team1}-{item.team2},</Text>
                  })
                }
            </View>
        <Button title={'add liga'} onPress={()=>this.addLiga()} ></Button>
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
    textInput: {
      color: '#000000',
      alignSelf: 'stretch',
      padding: 5,
      margin:10,
      marginBottom: 10,
      backgroundColor: 'rgba(122, 186, 122,0.7)',
      borderColor: '#fff',
      borderRadius: 10,
      borderWidth: 0.6,
    },
    freindsInLiga:{
      flexDirection:'row',
      
    },
    gamesInLiga:{
      flexDirection:'column',
    },
    text:{
      color:'black',
      fontSize:20
    }
  });

  function mapStateToProps (state) {
    return {
      liga: state.liga.liga,
      AllGames:state.allGames,
      freinds:state.freinds
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      addNewLiga: (name) => dispatch(addNewLiga(name)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddLiga)