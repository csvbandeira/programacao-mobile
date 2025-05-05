import { View, Text, Image } from "react-native";
import React from "react";

const App = () => {
	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					backgroundColor: "blue",
					padding: 10,
				}}
			>
				<Text style={{ color: "white" }}>HOME</Text>
				<Text style={{ color: "white" }}>NOTICIAS</Text>
				<Text style={{ color: "white" }}>BUSCA</Text>
			</View>
			<View
				style={{
					flex: 8,
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Image
					style={{
						height: "52%",
						width: "80%",
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,
					}}
					source={require("./assets/img/news.png")}
				/>

				<View style={{ flex: 1, padding: 10 }}>
					<View
						style={{
							marginVertical: 5,
							width: 300,
							flexDirection: "row",
							backgroundColor: "green",
							padding: 10,
							height: 100,
							width: 350,
						}}
					>
						<Image />
						<Text>Lorem ipsum</Text>
					</View>
					<View
						style={{
							marginVertical: 5,
							width: 300,
							flexDirection: "row",
							backgroundColor: "green",
							padding: 10,
							height: 100,
							width: 350,
						}}
					>
						<Image />
						<Text>Lorem ipsum</Text>
					</View>
					<View
						style={{
							marginVertical: 5,
							flexDirection: "row",
							backgroundColor: "green",
							padding: 10,
							height: 100,
							width: 350,
						}}
					>
						<Image />
						<Text>Lorem ipsum</Text>
					</View>
				</View>
			</View>
			<View style={{ flex: 1, backgroundColor: "blue" }}></View>
		</View>
	);
};

export default App;
