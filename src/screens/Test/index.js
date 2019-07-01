import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { TEXTS, MAIN_COLOR } from '../../common';
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { Button } from "react-native-paper"
import styles from "./styles"
import QuestionCard from './QuestionCard';
import { fetchTaskQuestions } from '../../redux/actions/TestActions';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_index: 0
    };
  }

  componentDidMount() {
    this.props.fetchTaskQuestions()
  }




  renderItem = ({ item }) => {
    return <QuestionCard question={item} />
  }

  onPressNext = () => {
    this.flatlist.scrollToIndex({ index: this.state.selected_index + 1 });
    this.setState({ selected_index: this.state.selected_index + 1 })
  }

  onPressBack = () => {
    this.flatlist.scrollToIndex({ index: this.state.selected_index - 1 });
    this.setState({ selected_index: this.state.selected_index - 1 })
  }

  render() {

    const { selected_index } = this.state;
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
            disabled={selected_index === 0}
            onPress={this.onPressBack}
            style={[styles.button, { borderWidth: 1, borderColor: selected_index === 0 ? "#aaa" : MAIN_COLOR }]} color={MAIN_COLOR} mode={"outlined"} >{TEXTS.back}</Button>
          <Button
            // disabled={selected_index === 4}

            style={[styles.button,
            { backgroundColor: selected_index === 4 ? MAIN_COLOR : MAIN_COLOR }
            ]}
            color={"#FFF"}
            onPress={this.onPressNext}
          >{selected_index == 4 ? TEXTS.view_result : TEXTS.next}</Button>

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.test.questions,
    loading: state.test.loading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTaskQuestions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);