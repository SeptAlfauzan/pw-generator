import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import Styles from "../utils/style";
const Splash = () => {
  const url: string = "../../assets/lotties/animation_l04ubw0q.json";
  return (
    <View style={tw`flex flex-col items-center`}>
      <Text style={[Styles.font_title, Styles.text_primary]}>Get Password</Text>
      <AnimatedLottieView
        style={tw`m-auto w-full self-center`}
        source={require(url)}
        autoPlay
        loop={false}
      />
      <Text style={[Styles.font_small, Styles.text_primary]}>
        Easy way to generate strong password
      </Text>
    </View>
  );
};

export default Splash;
