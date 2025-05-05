import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
	background: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "lightgray",
	},
	header: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "lightgray",
	},
	body: {
		flex: 5,
	},
	footer: {
		flex: 0.5,
		backgroundColor: "darkgray",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		padding: 20,
	},
	card: {
		height: 120,
		backgroundColor: "white",
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 5,
	},
	title: {
		color: "red",
		fontWeight: "bold",
		fontSize: 12,
	},
	notice: {
		color: "black",
		fontWeight: "bold",
		fontSize: 16,
	},
	date: {
		color: "gray",
		fontWeight: "bold",
		fontSize: 12,
	},
	bodyText: {
		fontSize: 16,
		fontWeight: "bold",
		margin: 10,
	},
});

export default Style;
