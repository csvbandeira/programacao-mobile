import React from "react";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View style={{ backgroundColor: "blue", height: "100%", width: 450 }}>
      <View style={{ width: "100%", height: "20%", backgroundColor: "green" }}>
        <Text></Text>
        <Text>Componente View</Text>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
      <View style={{ backgroundColor: "yellow", height: "70%", width: 100 }}>
        <Text>Componente View</Text>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
      <View style={{ backgroundColor: "red", height: "10%", width: 300 }}>
        <Text>Componente View</Text>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
    </View>
  );
};

export default App;
