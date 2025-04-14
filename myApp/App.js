import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  const style = StyleSheet.create({
    screen: {
      paddingTop: 30,
      paddingHorizontal: 10,
      flex: 1,
      backgroundColor: "powderblue",
    },
    header: {
      flex: 0.15,
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },
    center: {
      flex: 0.75,
      backgroundColor: "green",
    },
    footer: {
      flex: 0.1,
      backgroundColor: "black",
    },
  });

  return (
    <View style={style.screen}>
      <View style={style.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/img/myUser.png")}
            style={{
              width: 48,
              height: 60,
              resizeMode: "contain",
            }}
          />
          <Text style={{ marginLeft: 15 }}>NOME SOBRENOME</Text>
        </View>
        <Image
          source={require("./assets/img/myUser2.png")}
          style={{ height: 30, width: 20 }}
        />
      </View>
      <View style={style.center}>
        <Text>Conteúdo</Text>
      </View>
      <View style={style.footer}>
        <Text style={{ color: "white" }}>Footer</Text>
      </View>
    </View>
  );
};

export default App;
