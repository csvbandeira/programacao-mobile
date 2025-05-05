import { View, Text } from "react-native";

import Style from "../styles/style";

const Card = ({ title, news, date }) => {
	return (
		<View id="body" style={Style.card}>
			<Text style={Style.title}>{title}</Text>
			<Text style={Style.notice}>{news.toUpperCase()}</Text>
			<Text style={Style.date}>{date}</Text>
		</View>
	);
};

export default Card;
