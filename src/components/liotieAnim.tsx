import React from "react";
import LottieView from "lottie-react-native";

interface Props {
  url: string;
}
const LottieAnim = ({ url }: Props) => {
  return (
    <LottieView
      style={{ display: "flex" }}
      source={require("../../assets/lotties/animation_l04ubw0q.json")}
      autoPlay
      loop
    />
  );
};

export default LottieAnim;
