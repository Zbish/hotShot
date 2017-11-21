import React, { Component } from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import Games from '../components/Games'
import Ranking from '../components/Ranking'
import { connect } from 'react-redux';
import { addPerson, deletePerson } from '../../actions';

class Liga extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <Games gamesList={this.props.liga[0].games}></Games>
          <Ranking RankList={this.props.liga[0].players} ></Ranking>
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
  )(Liga)