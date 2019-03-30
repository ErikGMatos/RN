import { createStackNavigator } from "react-navigation";
import Main from "./pages/main";

export default createStackNavigator(
    {
        Main,
      
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3D7AE8"
            },
            headerTintColor: "#fff"
        }
    }
);
