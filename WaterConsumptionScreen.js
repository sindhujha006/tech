// screens/WaterConsumptionScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const WaterConsumptionScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Congrats, your AquaAlert is all set for reminders!</Text>
      <Button
        title="Done"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default WaterConsumptionScreen;
