import { View, Text, Image } from "react-native";

import Style from "../styles/style";

const Card = ({ title, news, date }) => {
	return (
		<View id="body" style={Style.card}>
			<View
				style={{
					height: "100%",
					width: "80%",
					backgroundColor: "white",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					marginVertical: 5,
				}}
			>
				<Text style={Style.title}>{title}</Text>
				<Text style={Style.notice}>{news.toUpperCase()}</Text>
				<Text style={Style.date}>{date}</Text>
			</View>
			<View
				style={{
					height: "100%",
					width: "20%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					style={{ height: 50, width: 50 }}
					source={require("./../../assets/img/image.png")}
				/>
			</View>
		</View>
	);
};

export default Card;
