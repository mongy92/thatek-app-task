import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions,WebView ,TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { MAIN_COLOR } from '../../common';
const { width } = Dimensions.get("window");

export default class QuestionCard extends Component {

    state = {
        selected_answer: null
    }

    onPressAnswer = (ans)=>{
        this.setState({ selected_answer : ans })
    }


     decodeEntities = (encodedString)=> {
        var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
        var translate = {
            "nbsp":" ",
            "amp" : "&",
            "quot": "\"",
            "lt"  : "<",
            "gt"  : ">"
        };
        return encodedString.replace(translate_re, function(match, entity) {
            return translate[entity];
        }).replace(/&#(\d+);/gi, function(match, numStr) {
            var num = parseInt(numStr, 10);
            return String.fromCharCode(num);
        });
    }

    render() {
        const { question } = this.props;
        const answers = [...question.incorrect_answers, question.correct_answer]

        return (
            <View style={styles.card} >
                <Text style={styles.questionText} >{ this.decodeEntities(question.question)}</Text>
                <View style={styles.list} >

                {answers.map((answer, i) => {
                    let is_selected = this.state.selected_answer === answer;
                    return (
                        <TouchableWithoutFeedback  key={i} onPress={()=> this.onPressAnswer(answer) } >

                            <View style={[styles.answerButton,{backgroundColor : is_selected ? MAIN_COLOR : null}]} >
                                <Icon 
                                    name={ is_selected? "radiobox-marked" : "radiobox-blank"}
                                    size={22}
                                    color={is_selected ? "#FFF" : null }
                                    />
                                <Text style={[styles.answerText, {color : is_selected ? "#FFF" : null }]} >{answer}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width,
        height: width,
        padding: 5,
    },
    list : {
        paddingLeft:5,
        marginTop : 10
    },
    questionText: {
        color: MAIN_COLOR,
        fontSize:20,
        fontWeight: "bold"
    },
    answerButton : {
        padding:5,
        flexDirection:"row",
        alignItems : "center",
        marginBottom:10,
        borderRadius  :10
    },
    answerText:{
        fontSize:18,
        marginLeft : 10
    }
})
