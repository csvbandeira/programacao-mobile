import { Picker } from "@react-native-picker/picker";
import { Text, View, Image, TextInput, TouchableHighlight } from "react-native";

import { estilos } from "./src/styles/style";

const App = () => {
	let logo2 = require("./src/img/logo2.png");
	let logo1 = require("./src/img/logo1.png");
	let textoConteudo =
		"No mundo do React Native, o componente Picker (selecionador) " +
		"se refere a um componente que permite ao usuário escolher entre um conjunto de opções. \n \n" +
		"Verifique o Exemplo abaixo:";

	const verifica = () => alert("ola");

	return (
		<View style={estilos.area_fundo}>
			<View id="cabecalho" style={estilos.cabecalho}>
				<Image source={logo1} style={estilos.imgCabecalho} />
				<Text style={estilos.textoCabecalho}>Componente Picker</Text>
			</View>

			<View id="conteudo" style={estilos.conteudo}>
				<Text style={estilos.textoConteudo}>{textoConteudo}</Text>
				<Text style={estilos.textoConteudo}>Digite seu nome:</Text>
				<TextInput style={estilos.entradaTextoConteudo} />
				<Text style={estilos.textoConteudo}>
					Escolha uma das opções abaixo:
				</Text>

				<Picker style={{ backgroundColor: "#1e90ff", height: 50 }}>
					<Picker.Item label="Selecione..." value="Selecione" />
					<Picker.Item label="Linguagem Java" value="Java" />
					<Picker.Item label="Linguagem JS" value="JS" />
					<Picker.Item label="Linguagem PHP" value="PHP" />
				</Picker>

				<TouchableHighlight onPress={verifica} style={estilos.botaoConteudo}>
					<Text
						style={{
							color: "#ffff00",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						CLIQUE AQUI
					</Text>
				</TouchableHighlight>
			</View>

			<View id="rodape" style={estilos.rodape}>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image source={logo2} style={estilos.imgRodape} />
					<Text style={estilos.textoRodape}>Luiz Fernando Corcini</Text>
				</View>
				<Text style={estilos.textoRodape}>2023</Text>
			</View>
		</View>
	);
};

export default App;
