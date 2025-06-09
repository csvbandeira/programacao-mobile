import { View, Text, Image } from "react-native";

import { style } from "../styles/style";

const Header = () => {
	const logo = require("./../../assets/img/img1.png");

	return (
		<View id="cabecalho" style={style.header}>
			<Image
				style={{ width: 50, height: 50, marginHorizontal: 5 }}
				source={logo}
			/>
			<View>
				<Text style={style.title}>AULA 07 - DESAFIO 04</Text>
				<Text style={style.subtitle}>COMPONENTE FLATLIST</Text>
			</View>
		</View>
	);
};

export default Header;
