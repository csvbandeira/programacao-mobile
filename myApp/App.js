import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

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
      backgroundColor: "white",
    },
    footer: {
      flex: 0.1,
      backgroundColor: "white",
      flexDirection: "row",
    },
    item: {
      backgroundColor: "blue",
      marginTop: 15,
      marginHorizontal: 10,
      borderRadius: 20,
      height: 70,
      borderLeftWidth: 3,
      borderLeftColor: "red",
    },
    icon: {
      width: 75,
      height: 70,
      resizeMode: "contain",
    },
    principalIcon: {
      width: 85,
      height: 70,
      borderRadius: 100,
    },
  });

  const items = [];

  for (let i = 0; i < 10; i++) {
    items.push(
      <View key={i} style={style.item}>
        <Text>Teste {i}</Text>
      </View>
    );
  }

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
      <ScrollView id="View03" style={style.center}>
        {items}
      </ScrollView>
      <View style={style.footer}>
        <View style={style.footer}>
          <View>
            <Image
              style={style.icon}
              source={require(`./assets/img/icon1.png`)}
            />
          </View>
          <View>
            <Image
              style={style.icon}
              source={require(`./assets/img/icon2.png`)}
            />
          </View>
          <View>
            <Image
              style={style.principalIcon}
              source={require(`./assets/img/icon3.png`)}
            />
          </View>
          <View>
            <Image
              style={style.icon}
              source={require(`./assets/img/icon4.png`)}
            />
          </View>
          <View>
            <Image
              style={style.icon}
              source={require(`./assets/img/icon5.png`)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
