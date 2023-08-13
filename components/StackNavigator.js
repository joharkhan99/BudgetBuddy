import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import BalanceScreen from "../pages/BalanceScreen";

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="addbalance" component={BalanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
