import { View, Text } from "react-native";

import { style } from "../styles/style";

const Body = () => {
	return (
		<View id="conteudo" style={style.body}>
			<Text style={{ alignSelf: "center" }}>Lista</Text>
		</View>
	);
};

export default Body;
