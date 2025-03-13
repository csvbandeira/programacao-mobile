import React from "react";
import { View, Text } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "blue" }}>
      <View style={{ backgroundColor: "yellow" }}>
        <Text></Text>
        <Text>Componente View</Text>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
      <View style={{ backgroundColor: "red" }}>
        <Text>Componente View</Text>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
    </View>
  );
}

export default App;
