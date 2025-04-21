import { View, Text } from "react-native";

import Style from "../styles/style";

const Footer = () => {
  const author = "Carlos Victor Bandeira";
  const date = "April/2025";

  return (
    <View id="footer" style={Style.footer}>
      <Text style={Style.footerAuthor}>{author}</Text>
      <Text style={Style.footerAuthor}>{date}</Text>
    </View>
  );
};

export default Footer;
