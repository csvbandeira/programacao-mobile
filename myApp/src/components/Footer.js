import { View, Text } from "react-native";

import Style from "../styles/style";

const Footer = ({ Author, Date }) => {
  return (
    <View id="footer" style={Style.footer}>
      <Text style={Style.footerAuthor}>{Author}</Text>
      <Text style={Style.footerAuthor}>{Date}</Text>
    </View>
  );
};

export default Footer;
