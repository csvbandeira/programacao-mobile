import { useState } from "react";
import {
	Switch,
	TouchableHighlight,
	View,
	Text,
	StyleSheet,
	Image,
} from "react-native";

function App() {
	const [est, setEst] = useState(estilos2);
	const [ligado, setLigado] = useState(false);
	const [textobotao, setTextoBotao] = useState("estilo2");

	function mudaEstilo() {
		if (ligado) {
			setEst(estilos2);
			setLigado(false);
			setTextoBotao("estilo 2");
		} else {
			setEst(estilos1);
			setLigado(true);
			setTextoBotao("estilo 1 ");
		}
	}

	return (
		<View style={est.area}>
			<Image source={require("./assets/img/img1.png")} />
			<Text style={est.font}>COMPONENTE SWITCH</Text>
			<TouchableHighlight onPress={mudaEstilo} style={est.botao}>
				<Text style={est.textobotao}>{textobotao}</Text>
			</TouchableHighlight>
			<Switch value={ligado} onValueChange={mudaEstilo} />
		</View>
	);
}

const estilos1 = StyleSheet.create({
	area: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	botao: {
		padding: 30,
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "red",
		borderRadius: 30,
	},
	textobotao: {
		color: "blue",
		fontSize: 20,
	},
	font: {
		textAlign: "center",
		fontSize: 40,
	},
});

const estilos2 = StyleSheet.create({
	area: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "space-around",
		backgroundColor: "yellow",
	},
	botao: {
		padding: 20,
		backgroundColor: "black",
	},
	textobotao: {
		color: "white",
		fontSize: 30,
	},
});

export default App;
