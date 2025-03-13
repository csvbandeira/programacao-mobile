import React from "react";
import { View, Text } from "react-native";

const styles = {
  red: { color: "red" },
};

const App = () => {
  return (
    <View>
      <Text>Teste</Text>
      <Text style={styles.red}>Teste</Text>
      <Text>Teste</Text>
    </View>
  );
};

export default App;
