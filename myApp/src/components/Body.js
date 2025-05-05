import { ScrollView, View, Text } from "react-native";

import Style from "../styles/style.js";
import Card from "./Card.js";

const Body = () => {
	const notices = [
		{
			title: "NOTÍCIA DE ÚLTIMA HORA",
			news: "Grande tempestade atinge a Paranágua",
			date: "04/05/2025",
		},
		{
			title: "ATUALIZAÇÃO MUNDIAL",
			news: "Neymar para guerra na Ucrânia!",
			date: "06/05/2025",
		},
		{
			title: "TECNOLOGIA",
			news: "DeepSeek melhor que ChatGPT?",
			date: "05/05/2025",
		},
		{
			title: "ESPORTES",
			news: "Coritiba encaminha vaga para o Super Mundial de Clubes",
			date: "05/05/2025",
		},
		{
			title: "ENTRETENIMENTO",
			news: "Michael Jackson é encontrado em Xique-Xique, na Bahia",
			date: "05/05/2025",
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
