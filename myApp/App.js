import React from "react";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View>
      <View style={{ backgroundColor: "red", height: "30%" }}>
        <Text></Text>
        <Text>Componente view</Text>
      </View>
      <View style={{ backgroundColor: "yellow", height: "60%" }}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
      </View>
      <View style={{ backgroundColor: "gray", height: "10%" }}>
        <Text>Carlos Victor Bandeira</Text>
        <Text>13/03/2025</Text>
      </View>
    </View>
  );
};

export default App;
