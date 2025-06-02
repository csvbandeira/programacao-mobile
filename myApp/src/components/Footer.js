import { estilos } from "../styles/style";

import { View, Image, Text } from "react-native";

const Footer = () => {
	const logo = require("../../assets/img/img1.png");

	return (
		<View id="rodape" style={estilos.rodape}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Image source={logo} style={estilos.imgRodape} />
				<Text style={estilos.textoRodape}>Carlos Victor Bandeira</Text>
			</View>
			<Text style={estilos.textoRodape}>2025</Text>
		</View>
	);
};

export default Footer;
