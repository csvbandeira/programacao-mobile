import { View, Text, Image } from "react-native";

import Style from "../styles/style";

const Header = ({ Path }) => {
  return (
    <View id="header" style={Style.header}>
      <Text style={Style.headerSubtitle}>DSV MOBILE</Text>
      <Image source={Path} style={Style.headerImage} />
      <Text style={Style.headerTitle}>Fundamentals II</Text>
    </View>
  );
};

export default Header;
