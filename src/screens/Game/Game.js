import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MainWrapper from '../../components/MainWrapper';
import CountDown from '../../components/CountDown';
import { UpdateScoreAction, RestartScoreAction } from '../../actions/Gameaction';
let width = Dimensions.get('screen').width / 2 - 8



class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: [...this.props.words.words] })
  }

  finishTime = () => {
    if (this.props.user.points < 55)
      this.props.navigation.navigate('GameOver')
  }

  randomColor = () => {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  shuffleData(item) {
    if (item == 'jQuery') this.props.update()
    this.setState({ data: this.shuffle([...this.state.data]) })
  }

  goToWin() {
    this.props.navigation.navigate('Clear')
  }

  render() {
    if (this.props.user.points == 55) this.goToWin()
    return (
      <MainWrapper>
        <View style={styles.titleContainer}>
          <Text style={styles.textMain}>Find it</Text>
          <Text style={styles.textSec}>now!</Text>
        </View>
        <View style={styles.padContainer}>
          <FlatList
            columnWrapperStyle={styles.padContainerList}
            data={this.state.data}
            extraData={this.state.data}
            numColumns={2}
            keyExtractor={item => item}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => { this.shuffleData(item) }} style={[styles.padContainerListelement, { backgroundColor: this.randomColor(), }]}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.countDownContainer}>
          <CountDown finish={this.finishTime.bind(this)} />
        </View>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  words: state.words,
})

const mapDispatchToProps = (dispatch) => ({

  update: () => dispatch(UpdateScoreAction()),
  restart: () => dispatch(RestartScoreAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)

const styles = StyleSheet.create({
  titleContainer: { flex: 1, justifyContent: 'center' },
  padContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  padContainerList: { justifyContent: 'space-between', },
  padContainerListelement: { width: width * 0.70, height: width * 0.70, margin: 4, justifyContent: 'center', alignItems: 'center' },
  textMain: { fontSize: 45 },
  textSec: { fontSize: 25, alignSelf: 'center' },
  countDownContainer: { flex: 1 }
})