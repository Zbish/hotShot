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
         freinds:[
            {name:'gil',points:70,code:1},
            {name:'dor',points:50,code:2},
            {name:'omri',points:60,code:3},
            {name:'azran',points:30,code:4},
            {name:'nizan',points:5,code:5}],
         players:[],
         AllGames:[{home:'argentina',away:'brazil',code:1,
                score:{home:7,away:2},
                icon:{home:'../flags/argentina.jpg',away:'../flags/brazil.jpg'}},
                {home:'belgium',away:'colombia',code:2,
                score:{home:1,away:3},
                icon:{home:'../flags/Belgium.jpg',away:'../flags/colombia.jpg'}},
                {home:'france',away:'sweden',code:3,
                score:{home:3,away:1},
                icon:{home:'../flags/france.jpg',away:'../flags/sweden.jpg'}}
              ],
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
      <ImageBackground source={require('../images/field.jpg')} style={styles.container}>
        <TextInput underLineColorAndroid='transparent'
                   placeholderTextColor="black"
                   placeholder='liga name' 
                   style={styles.textInput}
                   onChangeText={(val) => this.onChange(val)}
                   value={this.state.ligaName}
        />
          <AddFreind freinds={this.state.freinds} addPlayer={(name)=>this.addPlayer(name)} />
            <View style={styles.freindsInLiga}>
              <Text style={styles.text}>Players :</Text>
                    {
                    this.state.players.map((item, index) => {
                                    return <Text style={styles.text} key={index} item={item}>{item.name},</Text>
                  })
                }
            </View>
          <AddGames allgames={this.state.AllGames} addgame={(game) => this.addGame(game)} />
          <View style={styles.gamesInLiga}>
              <Text style={styles.text}>Games :</Text>
                    {
                    this.state.myGames.map((item, index) => {
                                    return <Text style={styles.text} key={index} item={item}>{item.home}-{item.away},</Text>
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
      liga: state.liga.liga
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