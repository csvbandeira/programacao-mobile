import { TextInput } from "react-native";
import { Styles } from "../styles/style";

function TextField(props) {
	let campoEditavel = false;
	let textoSeguro = false;

	if (props.edit == "true") {
		campoEditavel = true;
	} else {
		campoEditavel = false;
	}

	if (props.segT == "true") {
		textoSeguro = true;
	} else {
		textoSeguro = false;
	}

	if (props.mLin == "true") {
		return (
			<TextInput
				style={Styles.entrada_texto2}
				placeholder={props.pHol}
				autoCapitalize={props.aCap}
				maxLength={parseInt(props.cMax)}
				keyboardType={props.kTyp}
				editable={campoEditavel}
				secureTextEntry={textoSeguro}
				multiline={true}
			/>
		);
	} else {
		return (
			<TextInput
				style={Styles.entrada_texto}
				placeholder={props.pHol}
				autoCapitalize={props.aCap}
				maxLength={parseInt(props.cMax)}
				keyboardType={props.kTyp}
				editable={campoEditavel}
				secureTextEntry={textoSeguro}
				multiline={false}
			/>
		);
	}
}

export default TextField;
