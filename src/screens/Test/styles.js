import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container : {
        flex:1
    },
    buttons : {
        flexDirection :"row",
        justifyContent:"space-around",
        position : "absolute",
        bottom:20,
        left : 0,
        right : 0,
    },
    button : {
        width:"45%",
    }
})