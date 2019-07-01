
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TEXTS } from '../../common';
import { connect } from "react-redux"
import { Button } from "react-native-paper";
import styles from "./styles";
class Result extends Component {

    static navigationOptions = {
        title: TEXTS.testResult
    }

    render() {
        const { navigation, score } = this.props;
        return (
            <View style={styles.container} >
                <Text style={styles.resultText} >{`${TEXTS.test_score} : `}</Text>
                <Text style={styles.scoreText} >{`(${score} / 5)`}</Text>
                <View style={styles.buttons} >

                    <Button
                        style={styles.buttonStyle}
                        color={"#FFF"}
                        onPress={() => navigation.navigate("Test")}
                    >
                        {TEXTS.retake_test}
                    </Button>

                    <Button
                        style={[styles.buttonStyle, { backgroundColor: "#333" }]}
                        color={"#FFF"}
                        onPress={() => navigation.navigate("Home")}
                    >{TEXTS.home}</Button>
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        score: state.test.score
    }
}

export default connect(mapStateToProps)(Result);