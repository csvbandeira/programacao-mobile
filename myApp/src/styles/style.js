import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
	area_fundo: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 25,
	},
	cabecalho: {
		flex: 0.3,
		backgroundColor: "lightgray",
		width: "100%",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	cabTitulo: {
		fontSize: 30,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
	},
	cabSubTitulo: {
		fontSize: 20,
		marginBottom: 10,
	},
	corpo: {
		flex: 0.5,
	},
	paragrafo: {
		marginTop: 20,
		padding: 10,
	},
	entrada_texto: {
		height: 45,
		width: "90%",
		borderWidth: 1,
		borderColor: "#222",
		marginHorizontal: 10,
		fontSize: 20,
		padding: 10,
		marginTop: 10,
	},
	entrada_texto2: {
		height: 100,
		width: "90%",
		borderWidth: 1,
		borderColor: "#222",
		marginHorizontal: 10,
		fontSize: 20,
		padding: 5,
		marginTop: 10,
	},
	rodape: {
		flex: 0.1,
		backgroundColor: "lightgray",
		width: "100%",
		borderRadius: 20,
		justifyContent: "space-around",
		alignItems: "flex-end",
		flexDirection: "row",
	},
	rodTexto: {
		fontSize: 15,
		marginBottom: 10,
	},
});
