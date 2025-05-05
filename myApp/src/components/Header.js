import { View, Text, Image } from "react-native";

import Style from "../styles/style";

const Header = ({}) => {
	return (
		<View id="header" style={Style.header}>
			<View style={{ alignItems: "center" }}>
				<Text
					style={{
						color: "#fff",
						backgroundColor: "#c00",
						padding: 10,
						borderRadius: 5,
					}}
				>
					VEJA MAIS NO PORTAL
				</Text>
				<Text style={{ color: "gray", marginTop: 5, textAlign: "center" }}>
					cadastre-se, comente, saiba mais
				</Text>
			</View>
		</View>
	);
};

export default Header;
