import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MainWrapper from '../../components/MainWrapper';
import { connect } from 'react-redux';
import { RestartScoreAction } from '../../actions/Gameaction';
import { UpdateGlobalScore } from '../../actions/GlobalScoreAction';

class Clear extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  restartGame() {
    let scores = [...this.props.scores.points]
    let userScore = Object.assign({}, this.props.user)
    scores.push(userScore)
    this.props.updateScores(scores)
    this.props.restart()
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <MainWrapper>
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/jquery.png")} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { this.restartGame() }}>
            <Text style={styles.text}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  scores: state.scores,
})

const mapDispatchToProps = (dispatch) => ({
  restart: () => dispatch(RestartScoreAction()),
  updateScores: (points) => dispatch(UpdateGlobalScore(points))
})


export default connect(mapStateToProps, mapDispatchToProps)(Clear)

const styles = StyleSheet.create({
  imageContainer: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
  image: { width: '85%', height: '50%' },
  buttonContainer: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  text: { fontSize: 25 }
})