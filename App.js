import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Connexion from "./components/connexion"; 
import Nav from "./components/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="Nav" component={Nav} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

