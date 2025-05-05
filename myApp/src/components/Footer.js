import { View, Text, Image } from "react-native";

import Style from "../styles/style";

const Footer = ({}) => {
	return (
		<View id="footer" style={Style.footer}>
			<Image
				source={require("./../../assets/img/whats.png")}
				style={{ height: 40, width: 40 }}
			/>
			<Image
				source={require("./../../assets/img/mail.png")}
				style={{ height: 40, width: 40 }}
			/>
			<Image
				source={require("./../../assets/img/share.png")}
				style={{ height: 40, width: 40 }}
			/>
		</View>
	);
};

export default Footer;
