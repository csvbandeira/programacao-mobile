import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	app: {
		flex: 1,
		padding: 10,
	},
	header: {
		flex: 0.15,
		backgroundColor: "green",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	body: {
		flex: 0.85,
		backgroundColor: "skyBlue",
	},
	title: {
		color: "red",
		fontSize: 30,
		fontWeight: "bold",
		width: "100%",
		textAlign: "center",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
	subtitle: {
		color: "blue",
		fontSize: 25,
		fontStyle: "italic",
		backgroundColor: "darkorange",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		marginTop: 1,
		marginHorizontal: 5,
		paddingHorizontal: 10,
	},
});
