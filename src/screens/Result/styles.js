import {StyleSheet} from "react-native"
import { MAIN_COLOR } from "../../common";
const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding:10,
        paddingTop:30,
        justifyContent:"center"
    },
    resultText:{
        fontSize:35,
        color : "#333",
        textAlign:"right",
        fontWeight:"bold",
    },
    scoreText:{
        fontSize:35,
        color : "orange",
        textAlign:"center",
        fontWeight:"bold",
        marginVertical:10
    },
    buttonStyle : {
        backgroundColor : MAIN_COLOR,
        marginBottom:10
    }
})


export default styles;