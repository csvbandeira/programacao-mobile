import { ScrollView } from "react-native";

import Style from "../styles/style.js";
import Card from "./Card.js";

const Body = () => {
	const wordsText = [
		"Luiz",
		"Marcos",
		"Andréia",
		"Janaína",
		"Wagner",
		"Patrícia",
	];
	const colorsForWords = ["yellow", "black", "red", "black", "blue", "white"];
	const colorsForBackground = [
		"black",
		"yellow",
		"orange",
		"green",
		"gray",
		"purple",
	];
	const heights = [100, 50, 75, 60, 30, 80];
	const widths = ["100%", "50%", "75%", "60%", "25%", "80%"];
	const roles = [
		"Desenvolvedor",
		"Designer",
		"Gerente",
		"Testador",
		"Analista",
		"Suporte",
	];

	return (
		<ScrollView style={Style.body}>
			{wordsText.map((word, index) => (
				<Card
					key={index}
					Words={word}
					ColorForWords={colorsForWords[index]}
					ColorForBackground={colorsForBackground[index]}
					Height={heights[index]}
					Width={widths[index]}
					SubWords={roles[index]}
				/>
			))}
		</ScrollView>
	);
};

export default Body;
