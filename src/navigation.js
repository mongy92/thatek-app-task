import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import {StyleSheet} from "react-native"
import Home from "./screens/Home";
import Test from "./screens/Test";
import Result from "./screens/Result";


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#3aad48",
    },
    headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18
    }

})

const Navigation = createStackNavigator({
    Home,
    Test,
}, {
    headerLayoutPreset:"center",
    initialRouteName : "Home",
        defaultNavigationOptions: {
            headerStyle: styles.headerStyle,
            headerTintColor: "#FFF",
            headerTitleStyle:styles.headerTitleStyle
        }
    });


const ResultStack = createStackNavigator({
    Result : Result
},{
    headerLayoutPreset:"center",
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle,
        headerTintColor: "#FFF",
        headerTitleStyle:styles.headerTitleStyle
    }
})
const RootNavigation = createSwitchNavigator({
    Main : Navigation,
    Result  : ResultStack
})


export default createAppContainer(RootNavigation)

