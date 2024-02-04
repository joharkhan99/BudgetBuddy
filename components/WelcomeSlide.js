import { Text, Image, View, StyleSheet } from "react-native";

export default WelcomeSlide = ({ title, subText, img }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Image source={img} />
        </View>

        <View style={styles.textCont}>
          <Text className="text-red-500">{title}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "900",
    color: "#212325",
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: "#91919F",
    textAlign: "center",
  },
  textCont: {
    padding: 30,
    paddingBottom: 0,
  },
});
