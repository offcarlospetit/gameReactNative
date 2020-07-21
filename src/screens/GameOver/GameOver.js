import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { RestartScoreAction } from '../../actions/Gameaction';
import { UpdateGlobalScore } from '../../actions/GlobalScoreAction';

class GameOver extends Component {
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
        this.props.navigation.setOptions({
            headerTitle: "Game Over",
            headerTitleStyle: {
                textAlign: 'center',
                flexGrow: 1,
                marginRight: 0,
                alignSelf: 'center',
            },
            headerLeft: () => (null),
        });

        return (
            <MainWrapper>
                <View style={styles.titleMainContent}>
                    <Text style={styles.textMain}>¡Game Over!</Text>
                </View>
                <View style={styles.scoreContent}>
                    <Text style={styles.textSec}>Your</Text>
                    <Text style={styles.textMain}>{this.props.user.points}</Text>
                    <Text style={styles.textSec}>Score</Text>
                </View>
                <View style={styles.gobackButton}>
                    <TouchableOpacity onPress={() => { this.restartGame() }}>
                        <Text style={styles.textSec}>Back to home</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(GameOver)

const styles = StyleSheet.create({
    titleMainContent: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
    scoreContent: { flex: 2, justifyContent: 'flex-start', alignItems: 'center' },
    gobackButton: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
    textMain: { fontSize: 45 },
    textSec: { fontSize: 25 },
    countDownContainer: { flex: 1 }
})