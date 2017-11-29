import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  container:{
    flex:1
  },
  sub1:{
    flex:1
  },
  sub2:{
    flex:1
  },
  sub3:{
    flex:3
  },
  friendsInLiga:{
    flexDirection:'row',

  },
  gamesInLiga:{
    flexDirection:'column',
  },
  text:{
    color:'black',
    fontSize:20
  },
  games:{
    flex:3
  }
});
