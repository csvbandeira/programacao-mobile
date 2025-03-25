import React from "react";
import { View, Text, Image } from "react-native";

const App = () => {
  return (
    <View>
      <Image
        source={require("./assets/img/img1.png")}
        style={{ width: 200, height: 100 }}
      ></Image>
    </View>
  );
};

export default App;
