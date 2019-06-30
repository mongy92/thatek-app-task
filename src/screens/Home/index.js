import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from "./styles";
import { TEXTS } from '../../common';
import { Button } from "react-native-paper"
export default class Home extends Component {

    static navigationOptions = {
        title: "ذاتك",
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require("../../../assets/images/bg.jpg")}
                resizeMode={"cover"}
            >
                <Text style={styles.titleStyle} >{TEXTS.test_your_self}</Text>
                <Text style={styles.desriptionText} >{TEXTS.test_desc}</Text>
                <Button
                    style={styles.buttonStyle}
                    color={"#FFF"}
                    onPress={ ()=> this.props.navigation.navigate("Test") }
                    >{TEXTS.start_test}</Button>
            </ImageBackground>
        );
    }
}