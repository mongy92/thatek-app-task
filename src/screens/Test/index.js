import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList, Alert } from 'react-native';
import { TEXTS, MAIN_COLOR } from '../../common';
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { Button } from "react-native-paper"
import styles from "./styles"
import QuestionCard from './QuestionCard';
import { fetchTaskQuestions, onSelectAnswer } from '../../redux/actions/TestActions';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_question_index: 0
    };
  }

  static navigationOptions = {
    title: TEXTS.test,
}

  componentDidMount() {
    this.props.fetchTaskQuestions()
  }





  renderItem = ({ item, index }) => {
    const {questions}= this.props;
    const {selected_question_index} = this.state;
    return <QuestionCard
      question={item}
      onSelectAnswer={ answer => this.props.onSelectAnswer({ 
        answer,
        index,
        //Check if the user select the correct answer or not
        isCorrect :  questions[selected_question_index].correct_answer === answer })} />
  }


  onPressNext = () => {
    const { answers, navigation } = this.props;
    const { selected_question_index } = this.state;
    //make sure that the user select answer
    if (answers[selected_question_index]) {
      //check if the user at the last question
      if (selected_question_index === 4) {
        navigation.navigate("Result")
      } else {
        this.flatlist.scrollToIndex({ index: selected_question_index + 1 });
        this.setState({ selected_question_index: selected_question_index + 1 })
      }

    } else {
      Alert.alert(
        '',
        TEXTS.select_answer,
        [
          {
            text: TEXTS.ok,
            onPress: () => console.log('Cancel Pressed'),
            style: 'ok',
          },
        ],
        { cancelable: false },
      );
    }

  }

  onPressBack = () => {
    this.flatlist.scrollToIndex({ index: this.state.selected_question_index - 1 });
    this.setState({ selected_question_index: this.state.selected_question_index - 1 })
  }

  render() {

    const { selected_question_index } = this.state;
    const { questions, loading } = this.props;
    if (loading) return <ActivityIndicator size={"large"} />
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ paddingTop: 10 }}
          scrollEnabled={false}
          ref={flatlist => this.flatlist = flatlist}
          data={questions}
          keyExtractor={(i, index) => `${index}`}
          renderItem={this.renderItem}
          horizontal={true}
          pagingEnabled
        />
        <View style={styles.buttons} >
          <Button
            disabled={selected_question_index === 0}
            onPress={this.onPressBack}
            style={[styles.button, { borderWidth: 1, borderColor: selected_question_index === 0 ? "#aaa" : MAIN_COLOR }]} color={MAIN_COLOR} mode={"outlined"} >{TEXTS.back}</Button>
          <Button
            // disabled={selected_question_index === 4}

            style={[styles.button,
            { backgroundColor: selected_question_index === 4 ? MAIN_COLOR : MAIN_COLOR }
            ]}
            color={"#FFF"}
            onPress={this.onPressNext}
          >{selected_question_index == 4 ? TEXTS.view_result : TEXTS.next}</Button>

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.test.questions,
    loading: state.test.loading,
    answers: state.test.answers
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTaskQuestions,
    onSelectAnswer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);