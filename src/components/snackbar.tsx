import React, { forwardRef, useImperativeHandle } from "react";
import { Text, View, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import tw from "twrnc";

interface Props {
  text: String;
}
const SnackBar = ({ text }: Props, ref: React.Ref<unknown>) => {
  const [animate, setAnimate] = React.useState<Boolean>(false);
  const [content, setContent] = React.useState<string>("No content!");
  const offset = useSharedValue(100);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });

  useImperativeHandle(
    ref,
    () => ({
      //   this function will called from outside component
      handleAnimate: (str: string) => {
        handleAnimate(str);
      },
    }),
    []
  );
  function handleAnimate(str: string) {
    setContent(str);
    offset.value = withSpring(-30);
    setTimeout(() => {
      offset.value = withSpring(100);
    }, 2500);
  }
  return (
    <>
      <Animated.View
        style={[
          tw`absolute rounded-full shadow-lg bottom-10 bg-white px-8 py-3`,
          animatedStyles,
          {
            transform: [
              {
                translateY: 100,
              },
            ],
          },
        ]}
      >
        <Text>{content}</Text>
      </Animated.View>
    </>
  );
};
export default forwardRef(SnackBar);
