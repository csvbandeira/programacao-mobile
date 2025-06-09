import { View, Text, FlatList, Image } from "react-native";

import { style } from "../styles/style";

const Body = () => {
	const people = [
		{
			name: "Du",
			email: "du@email.com",
			course: "ADS",
			photo: require("./../../assets/img/icon3.png"),
		},
		{
			name: "Dudu",
			email: "dudu@email.com",
			course: "Enfermagem",
			photo: require("./../../assets/img/icon3.png"),
		},
		{
			name: "Edu",
			email: "edu@email.com",
			course: "Medicina",
			photo: require("./../../assets/img/icon3.png"),
		},
	];

	const showItems = ({ item }) => (
		<View style={{ padding: 15 }}>
			<View style={{ flexDirection: "row", padding: 5, gap: 10 }}>
				<Image style={{ borderRadius: 50 }} source={item.photo} />
				<View>
					<Text style={{ fontWeight: "bold" }}>{item.name}</Text>
					<Text>{item.email}</Text>
					<Text style={{ color: "blue" }}>{item.course}</Text>
				</View>
			</View>
			<View style={style.line} />
		</View>
	);

	return (
		<View id="conteudo" style={style.body}>
			<Text style={{ alignSelf: "center", marginTop: 25 }}>
				Lista de alunos
			</Text>
			<FlatList data={people} renderItem={showItems} />
		</View>
	);
};

export default Body;
