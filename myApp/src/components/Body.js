import { estilos } from "../styles/style";

import { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Body = () => {
	const [color, setColor] = useState("#ffff00");
	const content =
		"No mundo do React Native, o componente Picker (selecionador) " +
		"se refere a um componente que permite ao usuário escolher entre um conjunto de opções. \n \n" +
		"Verifique o Exemplo abaixo:";

	const verify = () => alert("ola");

	const focused = () => setColor("orange");
	const blur = () => setColor("#ffff00");

	return (
		<View id="conteudo" style={estilos.conteudo}>
			<Text style={estilos.textoConteudo}>{content}</Text>
			<Text style={estilos.textoConteudo}>Digite seu nome:</Text>
			<TextInput
				style={[estilos.entradaTextoConteudo, { backgroundColor: color }]}
				onFocus={focused}
				onBlur={blur}
			/>
			<Text style={estilos.textoConteudo}>Escolha uma das opções abaixo:</Text>

			<Picker style={{ backgroundColor: "#1e90ff", height: 50 }}>
				<Picker.Item label="Selecione..." value="Selecione" />
				<Picker.Item label="Linguagem Java" value="Java" />
				<Picker.Item label="Linguagem JS" value="JS" />
				<Picker.Item label="Linguagem PHP" value="PHP" />
			</Picker>

			<TouchableHighlight onPress={verify} style={estilos.botaoConteudo}>
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
	);
};

export default Body;
