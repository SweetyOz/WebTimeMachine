import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Connexion from "../components/connexion"; 
import Search from "../components/recherche"
import Settings from "../components/settings"
import Previous from "./previous";

const tab = createBottomTabNavigator();


export default function Nav() {
  return (
   
      <tab.Navigator
        screenOptions=
        {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == "Search") {
              iconName = "search-outline";
              
             
            } else if (route.name == "Settings") {
              iconName = "settings-outline";
            }
            
            if 
              (route.name == "Previous") {
                iconName = "scan-circle-outline";
              }

            
            return <Ionicons name={iconName} size={25} color="cyan" />;
          },

          tabBarActiveTintColor: 'cyan',
		      tabBarInactiveTintColor: 'dodgerblue',
        })}
        >
       <tab.Screen name="Search" component={Search} /> 
        <tab.Screen name="Settings" component={Settings} />
        <tab.Screen name="Previous" component={Previous} />
      </tab.Navigator>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
