import { Text, View, Image, TextInput, TouchableHighlight } from "react-native";

import { estilos } from "./src/styles/style";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const App = () => {
	return (
		<View style={estilos.area_fundo}>
			<Header />
			<Body />
			<Footer />
		</View>
	);
};

export default App;
