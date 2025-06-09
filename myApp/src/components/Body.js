import { View, Text, Image, SectionList } from "react-native";

import { style } from "../styles/style";

const Body = (props) => {
	const { name, data } = props;
	const logo =
		"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png";

	const continents = [
		"África",
		"Ásia",
		"América Central",
		"América do Norte",
		"América do Sul",
		"Europa",
		"Oceania",
	];
	const contents = [
		["Angola", "Costa do Marfim", "Nigeria"],
		["China", "Coreia do Sul", "Japão"],
		["El Salvador", "Panamá", "Costa Rica"],
		["Estado Unidos", "Canadá", "México"],
		[
			"Brasil",
			"Uruguai",
			"Paraguai",
			"Argentina",
			"Bolívia",
			"Chile",
			"Peru",
			"Suriname",
		],
		["Espanha", "Portugal"],
		["Austrália", "Nova Zelândia", "Papua Nova-Guiné"],
	];

	const handleItemPress = (item) =>
		alert("O país " + item + " foi selecionado!");

	const showObject = ({ item }) => (
		<View style={{ backgroundColor: "gray", marginVertical: 2 }}>
			<Text
				onPress={() => handleItemPress(item)}
				style={{ fontSize: 20, padding: 10, color: "white" }}
			>
				{item}
			</Text>
		</View>
	);

	const showHeader = ({ section }) => (
		<View style={{ backgroundColor: "green", borderRadius: 10 }}>
			<Text
				style={{
					fontSize: 30,
					fontWeight: "bold",
					textAlign: "center",
					color: "white",
				}}
			>
				{section.title.toUpperCase()}
			</Text>
		</View>
	);

	return (
		<View id="conteudo" style={{ flex: 1 }}>
			<View
				style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
			>
				<Image
					style={{ height: 150, width: 150, resizeMode: "contain" }}
					source={{ uri: logo }}
				/>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>Section List</Text>
				<Text style={{ fontSize: 30 }}>Home</Text>
			</View>
			<View style={{ flex: 0.75, paddingHorizontal: 5 }}>
				<SectionList
					sections={[
						{ title: continents[0], data: contents[(0, 0)] },
						{ title: continents[1], data: contents[(1, 1)] },
						{ title: continents[2], data: contents[(2, 2)] },
						{ title: continents[3], data: contents[(3, 3)] },
						{ title: continents[4], data: contents[(4, 4)] },
						{ title: continents[5], data: contents[(5, 5)] },
						{ title: continents[6], data: contents[(6, 6)] },
					]}
					renderItem={showObject}
					renderSectionHeader={showHeader}
					key={(_, index) => index}
				/>
			</View>
			<View
				style={{ flex: 0.05, justifyContent: "center", alignItems: "center" }}
			>
				<Text>
					DSV Mobile - {name} - {data}
				</Text>
			</View>
		</View>
	);
};

export default Body;
