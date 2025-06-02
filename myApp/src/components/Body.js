import { estilos } from "../styles/style";

import { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import Slider from "@react-native-community/slider";

const Body = () => {
	const [color, setColor] = useState("#ffff00");
	const [backgroundColor, setBackgroundColor] = useState("#ffff00");
	const [name, setName] = useState("");
	const [textColor, setTextColor] = useState("#3fff");

	const content =
		"No mundo do React Native, o componente Picker (selecionador) " +
		"se refere a um componente que permite ao usuário escolher entre um conjunto de opções. \n \n" +
		"Verifique o Exemplo abaixo:";

	const verify = () => alert("ola");

	const focused = () => setColor("orange");
	const blur = () => setColor("#ffff00");

	const changeName = (name) => setName(name);

	const dragSlider = () => {
		let random = "#" + Math.floor(Math.random() * 16777215).toString(16);
		setTextColor(random);
	};

	const dragSlider2 = () => {
		let random = "#" + Math.floor(Math.random() * 16777215).toString(16);
		setBackgroundColor(random);
	};

	return (
		<View
			id="conteudo"
			style={[estilos.conteudo, { backgroundColor: backgroundColor }]}
		>
			<Text style={estilos.textoConteudo}>{content}</Text>
			<Text style={estilos.textoConteudo}>Digite seu nome:</Text>
			<TextInput
				style={[estilos.entradaTextoConteudo, { backgroundColor: textColor }]}
				onFocus={focused}
				onBlur={blur}
				value={name}
				onChangeText={changeName}
			/>
			<Text style={estilos.textoConteudo}>Deslize o slider abaixo:</Text>
			<Slider
				id="Slider1"
				style={{ width: "75%", marginTop: 30 }}
				step={5}
				minimumValue={0}
				maximumValue={100}
				onValueChange={dragSlider}
			/>

			<Text style={estilos.textoConteudo}>Deslize o slider abaixo:</Text>
			<Slider
				id="Slider2"
				style={{ width: "75%", marginTop: 30 }}
				step={5}
				minimumValue={0}
				maximumValue={100}
				onValueChange={dragSlider2}
			/>

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
