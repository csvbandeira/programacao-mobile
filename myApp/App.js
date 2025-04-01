import React from "react";
import { View, Text, Image } from "react-native";

function App() {
  const content =
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry";
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        padding: 10,
        backgroundColor: "orange",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
          width: "100%",
          backgroundColor: "blue",
          borderRadius: 25,
        }}
      >
        <View
          style={{
            height: "20%",
            width: "100%",
            padding: 20,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              height: "50%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ height: "50%", width: "10%" }}
              source={require("./assets/img/user.png")}
            />
            <Image
              style={{ height: "50%", width: "10%" }}
              source={require("./assets/img/notification.png")}
            />
          </View>
          <View style={{ height: "50%", width: "100%" }}>
            <Text style={{ color: "white" }}>{content}</Text>
          </View>
        </View>
        <View
          style={{
            height: "80%",
            width: "100%",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 25,
            gap: 25,
          }}
        >
          <View
            style={{
              height: "20%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              marginTop: "50px",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                width: "100%",
                marginBottom: 10,
                color: "blue",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Categories
            </Text>
            <Image
              style={{ height: "75%", width: "25%", borderRadius: 15 }}
              source={require("./assets/img/img1.png")}
            />
            <Image
              style={{ height: "75%", width: "25%", borderRadius: 15 }}
              source={require("./assets/img/img2.png")}
            />
            <Image
              style={{ height: "75%", width: "25%", borderRadius: 15 }}
              source={require("./assets/img/img3.png")}
            />
          </View>
          <View
            style={{
              height: "80%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              marginTop: "50px",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                width: "100%",
                marginBottom: 10,
                color: "blue",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Technology
            </Text>
            <View
              style={{
                height: "30%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{ height: "75%", width: "40%", borderRadius: 15 }}
                source={require("./assets/img/img1.png")}
              />
              <Text style={{ height: "75%", width: "55%" }}>{content}</Text>
            </View>
            <View
              style={{
                height: "30%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{ height: "75%", width: "40%", borderRadius: 15 }}
                source={require("./assets/img/img1.png")}
              />
              <Text style={{ height: "75%", width: "55%" }}>{content}</Text>
            </View>
            <View
              style={{
                height: "30%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{ height: "75%", width: "40%", borderRadius: 15 }}
                source={require("./assets/img/img1.png")}
              />
              <Text style={{ height: "75%", width: "55%" }}>{content}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;
