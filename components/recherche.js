import { useState } from "react";
import { Text, View, Button, TextInput, TouchableOpacity} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Search({navigation}) {
    const [date, setDate] = useState(new Date);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false)

    const [websiteInput, setWebsiteInput] = useState('')

    const dateArray = date.toISOString().split('T') // séparer la date et l'heure

    // date picker //

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };

    //  input //

    const handleWebsiteInput = (e) => {
        setWebsiteInput(e)
    }

    // fetch API pour recup url du user

    const getWebsite = async () => {
        console.log(websiteInput);
        const timestamp = dateArray[0].split('-').join('') + "" + dateArray[1].substring(0, 5).replace(':','') // timestamp  avec le format YYYYMMYYHHMM 
 
        return fetch(
          `http://archive.org/wayback/available?url=${websiteInput}&timestamp=${timestamp}`
        )
          .then((response) => response.json())
          .then(async (responseObject) => {
            await AsyncStorage.setItem(
                "url",
                responseObject.archived_snapshots.closest.url
            )
            
            let answeredUrl = await AsyncStorage.getItem("url")

            navigation.navigate('Previous', {
                url: answeredUrl})
          })
          .catch((error) => {
            console.error(error);
          });
      };


    return (
        <View>
            <TextInput
                placeholder="adresse du site recherché"
                onChangeText={handleWebsiteInput}
               placeholderTextColor="#003f5c"style={{
               borderWidth: 2,
                 borderRadius: 10,
                    height: 50,
                  marginHorizontal: 20,
                   borderColor: "cyan",
                paddingLeft: 10,  marginBottom:20, marginTop:150}}
            ></TextInput>

            <View>
            <TouchableOpacity onPress={showDatepicker} title="Date" style={{ backgroundColor: "darkcyan", padding: 10, borderRadius: 20, marginHorizontal: 100, alignItems: "center", marginBottom:20}} > 
              <Text style={{ color: "white", fontWeight: "bold" }}>Date</Text>
              </TouchableOpacity>  
            </View>

            <View>
              <TouchableOpacity onPress={showTimepicker} title="Heure" style={{ backgroundColor: "darkcyan", padding: 10, borderRadius: 20, marginHorizontal: 100, alignItems: "center" , marginBottom:20}} > 
              <Text style={{ color: "white", fontWeight: "bold" }}>Heure</Text>
              </TouchableOpacity>    
            </View>

            <View style={{alignItems:"center"}}>
                <Text style={{fontSize: 17, color:"#003f5c"}}>Date : {date.toLocaleDateString("fr-FR")}</Text>
                <Text style={{fontSize: 17, color:"#003f5c"}}>Heure : {date.toLocaleTimeString("fr-FR")}</Text>
            </View>

            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )}

            <View>
              <TouchableOpacity onPress={getWebsite} title="Valider" style={{ backgroundColor: "darkcyan", padding: 10, borderRadius: 20, marginHorizontal: 100, alignItems: "center" , marginTop:20}} > 
              <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
              </TouchableOpacity>    
            </View>
          
        </View>
    ); 
}

