import { View, Text, Image } from "react-native";
import { estilos } from "../styles/style";

const Header = () => {
	const logo = require("./../../assets/img/img1.png");

	return (
		<View id="cabecalho" style={estilos.cabecalho}>
			<Image source={logo} style={estilos.imgCabecalho} />
			<Text style={estilos.textoCabecalho}>Componente Picker</Text>
		</View>
	);
};

export default Header;
