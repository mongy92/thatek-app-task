import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { API_URL, TEXTS, MAIN_COLOR } from '../../common';
import { Button } from "react-native-paper"
import styles from "./styles"
import QuestionCard from './QuestionCard';
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      questions: [],
      selected_index: 0
    };
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      console.log(json)
      if (json.response_code === 0) {
        this.setState({ questions: json.results })
      }
      this.setState({ loading: false })
    } catch (error) {
      console.log(error)
    }
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
    const { loading, questions, selected_index } = this.state;
    if (loading) return <ActivityIndicator size={"large"} />
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{paddingTop:10}}
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
              { backgroundColor: selected_index === 4? MAIN_COLOR : MAIN_COLOR }
            ]}
            color={"#FFF"}
            onPress={this.onPressNext}
          >{ selected_index==4 ? TEXTS.view_result : TEXTS.next}</Button>

        </View>
      </View>
    );
  }
}