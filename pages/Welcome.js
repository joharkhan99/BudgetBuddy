import React, { useState } from "react"; // Import useState
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import WelcomeSlide from "../components/WelcomeSlide";

const Welcome = ({ navigation }) => {
  const data = [
    {
      title: "Gain total control of your money",
      subText: "Become your own money manager and make every cent count",
      img: require("../assets/welcome1.png"),
    },
    {
      title: "Know where your money goes",
      subText:
        "Track your transaction easily, with categories and financial report",
      img: require("../assets/welcome2.png"),
    },
    {
      title: "Planning ahead",
      subText: "Setup your budget for each category so you in control",
      img: require("../assets/welcome3.png"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Manage active index

  const renderItem = ({ item }) => (
    <WelcomeSlide title={item.title} subText={item.subText} img={item.img} />
  );

  const onSnapToItem = (index) => {
    setActiveIndex(index); // Update the active index when the slide changes
  };

  const screenWidth = Dimensions.get("window").width;

  const LoadBalancePage = () => {
    navigation.navigate("addbalance");
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        inactiveSlideScale={0}
        inactiveSlideOpacity={0}
        onSnapToItem={onSnapToItem} // Add onSnapToItem callback
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.6}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={LoadBalancePage}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#7F3DFF",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    paddingVertical: 15,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  carouselContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#7F3DFF",
  },
});

export default Welcome;
