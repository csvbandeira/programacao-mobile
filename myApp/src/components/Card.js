import { View, Text } from "react-native";

const Card = ({ Words, ColorForWords, ColorForBackground }) => {
  return (
    <View
      id="body"
      style={{
        backgroundColor: ColorForBackground,
        marginTop: 10,
        height: 100,
        width: "100%",
      }}
    >
      <Text style={{ color: ColorForWords }}>{Words}</Text>
    </View>
  );
};

export default Card;
