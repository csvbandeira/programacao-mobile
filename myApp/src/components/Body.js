import { View, Text, FlatList, Image } from "react-native";

import { style } from "../styles/style";

const Body = () => {
	const people = [
		{
			name: "Caraca, Muleke!",
			singer: "Thiaguinho",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Deixa Acontecer",
			singer: "Grupo Revelação",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Deixa Alagar",
			singer: "Grupo Revelação",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Moça",
			singer: "Tiee",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Pura Adrenalina",
			singer: "Belo",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Pé na Areia",
			singer: "Thiaguinho",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Telecine",
			singer: "Dilsinho",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Me perdoa",
			singer: "Ferrugem, Iza",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Disritmia",
			singer: "Causarina",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
		{
			name: "Camisa 10",
			singer: "Turma do Pagode",
			gender: "Pagode",
			photo:
				"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png",
		},
	];

	const showItems = ({ item }) => (
		<View style={{ padding: 15 }}>
			<View style={{ flexDirection: "row", padding: 5, gap: 10 }}>
				<Image
					style={{ width: 50, height: 50, borderRadius: 50 }}
					source={{ uri: item.photo }}
				/>
				<View>
					<Text style={{ fontWeight: "bold" }}>{item.name.toUpperCase()}</Text>
					<Text>{item.singer}</Text>
					<Text style={{ color: "green" }}>{item.gender}</Text>
				</View>
			</View>
			<View style={style.line} />
		</View>
	);

	return (
		<View id="conteudo" style={style.body}>
			<Text style={{ alignSelf: "center", marginTop: 25 }}>
				Lista de músicas
			</Text>
			<FlatList data={people} renderItem={showItems} />
		</View>
	);
};

export default Body;
