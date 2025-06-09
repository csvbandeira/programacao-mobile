import { View } from "react-native";

import { style } from "./src/styles/style";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";

function App() {
	return (
		<View style={style.app}>
			<Header />
			<Body />
		</View>
	);
}

export default App;
