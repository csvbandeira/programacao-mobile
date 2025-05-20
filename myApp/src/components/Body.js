import { Text, ScrollView } from "react-native";
import { Styles } from "./../styles/style";
import TextField from "./TextField";

function Body() {
	const textFieldsData = [
		{
			pHol: "Digite seu nome",
			aCap: "characters",
			cMax: "30",
			kTyp: "default",
			edit: "true",
			segT: "false",
			mLin: "false",
		},
		{
			pHol: "Qual a sua idade",
			aCap: "none",
			cMax: "2",
			kTyp: "number-pad",
			edit: "true",
			segT: "false",
			mLin: "false",
		},
		{
			pHol: "CPF:999.999.999-00",
			aCap: "none",
			cMax: "0",
			kTyp: "number-pad",
			edit: "false",
			segT: "false",
			mLin: "false",
		},
		{
			pHol: "Digite seu email",
			aCap: "none",
			cMax: "50",
			kTyp: "email-address",
			edit: "true",
			segT: "false",
			mLin: "false",
		},
		{
			pHol: "Digite seu número celular",
			aCap: "none",
			cMax: "50",
			kTyp: "phone-pad",
			edit: "true",
			segT: "false",
			mLin: "false",
		},
		{
			pHol: "Observações",
			aCap: "sentences",
			cMax: "200",
			kTyp: "default",
			edit: "true",
			segT: "false",
			mLin: "true",
		},
		{
			pHol: "Digite sua senha",
			aCap: "none",
			cMax: "5",
			kTyp: "default",
			edit: "true",
			segT: "true",
			mLin: "false",
		},
	];

	return (
		<ScrollView style={Styles.corpo}>
			<Text style={Styles.paragrafo}>Preencha os campos abaixo:</Text>

			{textFieldsData.map((props, idx) => (
				<TextField key={idx} {...props} />
			))}

			<Text style={[Styles.paragrafo, { color: "red" }]}>
				Note que o campo do CPF não pode ser alterado!
			</Text>
		</ScrollView>
	);
}

export default Body;
