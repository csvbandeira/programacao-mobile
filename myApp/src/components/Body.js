import { View, Text, Image, SectionList } from "react-native";

import { style } from "../styles/style";

const Body = (props) => {
	const { name, data } = props;
	const logo =
		"https://images.icon-icons.com/3041/PNG/512/spotify_logo_icon_189218.png";

	const titles = ["title1", "title2"];
	const contents = [
		["title1", "title2", "title3"],
		["title4", "title5", "title6"],
	];

	const showObject = ({ item }) => (
		<View>
			<Text style={{ fontSize: 20 }}>{item}</Text>
		</View>
	);
	const showHeader = ({ section }) => (
		<View>
			<Text style={{ fontSize: 30, fontWeight: "bold" }}>{section.title}</Text>
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
			<View style={{ flex: 0.75, paddingHorizontal: 20 }}>
				<SectionList
					sections={[
						{ title: titles[0], data: contents[(0, 0)] },
						{ title: titles[1], data: contents[(1, 1)] },
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
