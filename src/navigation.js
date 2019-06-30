import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import Home from "./screens/Home";
import Test from "./screens/Test";
const Navigation = createStackNavigator({
    Home,
    Test
}, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#3aad48",
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20
            }
        }
    })

export default createAppContainer(Navigation)