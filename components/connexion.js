import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

 


function Connexion({ navigation }) {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
    useEffect(() => {
      console.log("email", email);
    }, [login, email, password]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
           onChangeText={(email) => setEmail(email)}
          
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity   onPress={() => {
            if (email != null && password != null) {
              setLogin(true);
              navigation.navigate("Nav");
            } else {
              Alert.alert("Erreur", "email ou mdp incorrects");
            }
          }}
          style={{ backgroundColor: "darkcyan", padding: 10, borderRadius: 20, paddingHorizontal:50 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "cyan",
    borderRadius: 30,
    width: "50%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "aliceblue",
    
  },
});

export default Connexion;