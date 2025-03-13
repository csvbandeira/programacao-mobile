import React from "react";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View style={{ backgroundColor: "blue", height: 300 }}>
      <View style={{ backgroundColor: "yellow", height: 150 }}>
        <Text></Text>
        <Text>Componente View</Text>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
      <View style={{ backgroundColor: "red", height: 75 }}>
        <Text>Componente View</Text>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
    </View>
  );
};

export default App;
