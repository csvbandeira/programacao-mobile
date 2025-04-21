import { ScrollView } from "react-native";

import Style from "../styles/style.js";
import Card from "./Card.js";

const Body = () => {
  return (
    <ScrollView style={Style.body}>
      <Card
        Words={"TEXT 01"}
        ColorForWords={"yellow"}
        ColorForBackground={"black"}
        Height={100}
        Width={"100%"}
      />
      <Card
        Words={"TEXT 02"}
        ColorForWords={"black"}
        ColorForBackground={"yellow"}
        Height={50}
        Width={"50%"}
      />
      <Card
        Words={"TEXT 03"}
        ColorForWords={"red"}
        ColorForBackground={"orange"}
        Height={75}
        Width={"75%"}
      />
      <Card
        Words={"TEXT 04"}
        ColorForWords={"black"}
        ColorForBackground={"green"}
        Height={60}
        Width={"60%"}
      />
      <Card
        Words={"TEXT 05"}
        ColorForWords={"blue"}
        ColorForBackground={"gray"}
        Height={25}
        Width={"25%"}
      />
      <Card
        Words={"TEXT 06"}
        ColorForWords={"white"}
        ColorForBackground={"purple"}
        Height={80}
        Width={"80%"}
      />
    </ScrollView>
  );
};

export default Body;
