import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native/types";

const MeuInput = () => {
  return (
    <SafeAreaView>
      <Text> label</Text>
      <TextInput style={style.input}></TextInput>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottin: 15,
    marginTop: 3,
    padding: 10,
    width: 300,
    fontSize: 18,
    color: "#1a1a1a",
  },
});

export default MeuInput;
