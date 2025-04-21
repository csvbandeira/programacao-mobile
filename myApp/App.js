import { View } from "react-native";

import Style from "./src/styles/style";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const App = () => {
  return (
    <View id="background" style={Style.background}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

export default App;
