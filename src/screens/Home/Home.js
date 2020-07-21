import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainWrapper from '../../components/MainWrapper';
import Icon from 'react-native-vector-icons/FontAwesome';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    goTo() {

        this.props.navigation.navigate('Game')
    }

    getHigScore() {
        let score = Math.max.apply(Math, this.props.scores.points.map(function (score) { return score.points; }))
        if (score > 0) return score
        return 0
    }
    getHigName() {
        return Math.max.apply(Math, this.props.scores.points.map(function (score) { if (score.points) return score.name; }))
        return 0
    }

    render() {
        return (
            <MainWrapper>
                <View style={styles.mainContainer}>
                    <Text style={styles.textMain}>
                        Jquery Finder
                    </Text>
                </View>
                <View style={styles.buttonPlay}>
                    <TouchableOpacity onPress={() => { this.goTo() }}>
                        <Icon name={"play"} size={130} />
                    </TouchableOpacity>
                </View>
                <View style={styles.highScore}>
                    <Text style={styles.highScoreText}>
                        Hig Score
                    </Text>
                </View>
                <View style={styles.highScorePointContent}>
                    <Text style={styles.highScorePointContentText}>
                        {this.getHigScore()}
                    </Text>
                </View>
            </MainWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    scores: state.scores
})


export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    mainContainer: { flex: 2, justifyContent: 'center' },
    buttonPlay: { flex: 1, justifyContent: 'center' },
    highScore: { flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' },
    textMain: { fontWeight: '400', fontSize: 50 },
    textSec: { fontSize: 25 },
    highScoreText: { fontWeight: 'bold' },
    highScorePointContent: { flex: 2, marginTop: 20 },
    highScorePointContentText: { fontWeight: 'bold', fontSize: 35 }
})