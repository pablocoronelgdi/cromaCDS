import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.main}>
      <Text>hola</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    backgroundColor: "#fff",
    gap: 3,
  },
});
