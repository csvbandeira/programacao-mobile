import { View, Text } from "react-native";

const Card = ({ Words, ColorForWords, ColorForBackground, Height, Width }) => {
  return (
    <View
      id="body"
      style={{
        backgroundColor: ColorForBackground,
        marginTop: 10,
        height: Height,
        width: Width,
      }}
    >
      <Text style={{ color: ColorForWords }}>{Words}</Text>
    </View>
  );
};

export default Card;
