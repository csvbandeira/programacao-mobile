import { ScrollView, View, Text } from "react-native";

import Style from "../styles/style.js";
import Card from "./Card.js";

const Body = () => {
	const notices = [
		{
			title: "NOTÍCIA DE ÚLTIMA HORA",
			news: "Grande tempestade atinge a costa",
			date: "10/03/2023",
		},
		{
			title: "ATUALIZAÇÃO MUNDIAL",
			news: "Mercados globais apresentam forte alta",
			date: "09/03/2023",
		},
		{
			title: "TECNOLOGIA",
			news: "Novo modelo de IA lançado",
			date: "08/03/2023",
		},
		{
			title: "ESPORTES",
			news: "Time local vence campeonato",
			date: "07/03/2023",
		},
		{
			title: "ENTRETENIMENTO",
			news: "Ator famoso anuncia novo filme",
			date: "06/03/2023",
		},
	];

	return (
		<View style={Style.body}>
			<Text style={Style.bodyText}>LEIA MAIS</Text>
			<ScrollView style={Style.scroll}>
				{notices.map((notice, index) => (
					<Card
						key={index}
						title={notice.title}
						news={notice.news}
						date={notice.date}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Body;
