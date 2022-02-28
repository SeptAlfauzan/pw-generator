import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import Styles from "./../utils/style";
import React from "react";
import tw from "twrnc";
import SnackBar from "../components/snackbar";
import * as Clipboard from "expo-clipboard";

interface SnackBar {
  handleAnimate: (str: string) => void;
}

const Main = () => {
  const [length, setLength] = React.useState<Number>(8);
  const [password, setPassword] = React.useState<string>(
    "No password generated yet!"
  );
  const [generate, setGenerate] = React.useState<boolean>(false);
  const snackBarRef = React.useRef<SnackBar>();
  const copyToClipboard = (): void => {
    if (!generate)
      return (
        snackBarRef.current &&
        snackBarRef.current?.handleAnimate("Please generate password first!")
      );
    Clipboard.setString(password);
    console.log("Coppied");
    // toggle snackbar
    snackBarRef.current &&
      snackBarRef.current?.handleAnimate("Password coppied! ✅");
  };

  const generatePassword = (length: Number): void => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?";
    const randomString = Array.apply(null, Array(length))
      .map(() => possible[Math.floor(Math.random() * possible.length)])
      .join("");
    setPassword(randomString);
    setGenerate(true);
  };
  return (
    <>
      <View
        style={tw`flex flex-1 max-h-2/4 w-5/6 px-8 pt-10 rounded-xl relative  bg-white`}
      >
        <Text style={[Styles.font_title, Styles.text_primary]}>
          Let's Generate New Password
        </Text>
        <Text style={Styles.font_normal}>Password length</Text>
        <Text style={[Styles.font_small, tw`ml-auto text-slate-500`]}>
          {length} characters
        </Text>
        <Slider
          style={{ width: "110%", height: 40, marginLeft: "-5%" }}
          minimumValue={8}
          maximumValue={32}
          step={1}
          onValueChange={(value) => setLength(value)}
          minimumTrackTintColor="#FFC6C6"
          maximumTrackTintColor="#E8F3F1"
          thumbTintColor="#FFC6C6"
        />
        <Pressable
          onPress={copyToClipboard}
          style={[tw`px-5 pt-8 pb-3 rounded-xl flex`, Styles.bg_clipboard]}
        >
          <Text style={[Styles.font_normal]}>{password}</Text>
          <Text
            style={[Styles.font_small, Styles.text_primary, tw`self-end mt-10`]}
          >
            Tap this area to copy
          </Text>
        </Pressable>
        <View style={tw`flex flex-row bottom-0 absolute left-0 right-0`}>
          <Pressable
            style={tw`w-1/2 bg-transparent flex flex-row justify-between rounded-bl-xl px-5 py-4`}
            onPress={copyToClipboard}
          >
            <Text>ic</Text>
            <Text style={Styles.text_primary}>Copy</Text>
          </Pressable>
          <Pressable
            style={[
              tw`w-1/2 flex flex-row justify-between rounded-br-xl px-5 py-4 rounded-tl-3xl`,
              Styles.bg_primary,
            ]}
            onPress={() => generatePassword(length)}
          >
            <Text>ic</Text>
            <Text style={tw`text-white`}>Generate</Text>
          </Pressable>
        </View>
      </View>
      <SnackBar ref={snackBarRef} text={"Password coppied! ✅"} />
    </>
  );
};
export default Main;
