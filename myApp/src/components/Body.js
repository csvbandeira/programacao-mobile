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
      />
      <Card
        Words={"TEXT 02"}
        ColorForWords={"black"}
        ColorForBackground={"yellow"}
      />
      <Card
        Words={"TEXT 03"}
        ColorForWords={"red"}
        ColorForBackground={"orange"}
      />
    </ScrollView>
  );
};

export default Body;
