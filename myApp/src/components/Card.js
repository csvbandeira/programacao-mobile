import { View, Text, Image } from "react-native";

const Card = ({
	Words,
	ColorForWords,
	ColorForBackground,
	Height,
	Width,
	SubWords,
}) => {
	return (
		<View
			id="body"
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				padding: 4,
				gap: 8,
				backgroundColor: ColorForBackground,
				marginTop: 10,
				height: Height,
				width: Width,
			}}
		>
			<Image
				source={require("../../assets/img/icon3.png")}
				style={{ height: "75%", width: "20%", borderRadius: 100 }}
			/>
			<View>
				<Text style={{ color: ColorForWords, fontSize: 16 }}>{Words}</Text>
				<Text style={{ color: ColorForWords, fontSize: 12 }}>{SubWords}</Text>
			</View>
		</View>
	);
};

export default Card;
