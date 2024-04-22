import React, { useState } from 'react';
import { View, Text, TextInput, Button , st} from 'react-native';

function SettingsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [waterQuantity, setWaterQuantity] = useState('');
  const [remainders, setRemainders] = useState(0);

  const handleSubmit = () => {
    // Assuming you want to increment remainders every time the form is submitted
    setRemainders(remainders + 1);
    // You can add further logic here, like sending data to a server or displaying it in some way
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Water Quantity:", waterQuantity);
  };

  return (


    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>AquaAlert</Text> 

      <Text style={styles.subtitle}>Input Form</Text>
  
      
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ borderWidth: 1, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={(text) => setGender(text)}
        style={{ borderWidth: 1, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Water Quantity in Ml"
        value={waterQuantity}
        onChangeText={(text) => setWaterQuantity(text)}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, width: 200 }}
      />
      <Button
        title="Set Remainders"
        onPress={handleSubmit}
      />
      <View style={{ marginTop: 20 }}>
        <Text>Number of Remainders: {remainders}</Text>
      </View>
      <Button
        title="Submit"
        onPress={() => navigation.navigate('WaterConsumption')}
      />
    </View>
  );
}
const styles = {
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: -200,
    marginBottom: 150,
    
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
  remaindersContainer: {
    marginTop: 20,
  },
};

export default SettingsScreen;
