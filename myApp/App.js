import React from "react";
import { View, Text, Image } from "react-native";

const App = () => {
  const drivers = [
    { position: 1, name: "Lando Norris", point: 62 },
    { position: 2, name: "Max Verstappen", point: 61 },
    { position: 3, name: "Oscar Piastri", point: 49 },
    { position: 4, name: "George Russell", point: 45 },
    { position: 5, name: "A. Kimi Antonelli", point: 30 },
  ];

  let Content = null;

  for (let i = 0; i < drivers.length; i++) {
    Content = (
      <>
        {Content}
        <View
          key={i}
          style={{
            height: "19%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: 10,
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "semi-bold",
            }}
          >
            {drivers[i].position}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {drivers[i].name.toUpperCase()}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {drivers[i].point}
          </Text>
        </View>
      </>
    );
  }

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          height: "20%",
          width: "100%",
          backgroundColor: "black",
          paddingVertical: 20,
          paddingHorizontal: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("./assets/img/formula-1.png")}
          style={{ height: "100%", width: "75%", borderRadius: 20 }}
        />
      </View>
      <View
        style={{
          height: "70%",
          width: "100%",
          backgroundColor: "red",
          margin: "auto",
          padding: 10,
          gap: 5,
        }}
      >
        {Content}
      </View>
      <View
        style={{
          height: "10%",
          width: "100%",
          backgroundColor: "black",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>POSIÇÃO</Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>PILOTO</Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>PONTUAÇÃO</Text>
      </View>
    </View>
  );
};

export default App;
