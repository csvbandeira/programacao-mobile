import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "lightgray",
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  header: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flex: 0.35,
    borderTopLeftRadius: 25,
    flexDirection: "column-reverse",
    backgroundColor: "darkred",
    borderTopRightRadius: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerImage: {
    width: 170,
    height: 100,
    borderRadius: 25,
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
  },
  headerSubtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "white",
    flex: 0.65,
  },
  footer: {
    flex: 0.15,
    flexDirection: "row",
    backgroundColor: "darkred",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerAuthor: {
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Style;
