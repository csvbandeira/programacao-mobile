import { View } from "react-native";

import Style from "./src/styles/style";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const App = () => {
  return (
    <View id="background" style={Style.background}>
      <Header Path={require("./assets/img/img1.png")} />
      <Body />
      <Footer Author={"Carlos Victor Bandeira"} Date={"April/2025"} />
    </View>
  );
};

export default App;
