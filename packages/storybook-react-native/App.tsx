import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, SwitchIcon, Checkbox} from "@cromaui/react-native/";
import { ThemeProvider } from "styled-components";
import { macro } from "./src/theme/theme";
import { useState } from "react";

export default function App() {
  const [value, setvalue] = useState(true);
  return (
    <View style={styles.main}>
      <ThemeProvider theme={macro}>
        <Icon name="circle" color="success" size="medium" />
        <Button variant="outlined" color="success">
          Hola
        </Button>
        <Button variant="outlined">Hola</Button>
        <Button
          variant="filled"
          color="primary"
          iconName="circle"
          iconPosition="right"
        >
          Hola
        </Button>
        <SwitchIcon value={value} onPress={()=>setvalue(!value)} />
        <SwitchIcon disabled value={value} onPress={()=>setvalue(!value)} />

        <Text>{value ? "hola" : "chau"}</Text>
        <Button>Hola</Button>
        <Checkbox />

    
      </ThemeProvider>
    </View>
  );
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
