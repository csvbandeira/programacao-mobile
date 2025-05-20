import { Text, View } from "react-native";

import Body from "./src/components/Body";
import { Styles } from "./src/styles/style";

function App() {
	return (
		<View style={Styles.area_fundo}>
			<View style={Styles.cabecalho}>
				<Text style={Styles.cabTitulo}>Aula 06</Text>
				<Text style={Styles.cabSubTitulo}>Componente TextInput</Text>
			</View>

			<Body />
		</View>
	);
}

export default App;
