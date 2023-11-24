import { StyleSheet, View } from 'react-native';
import Button from './src/components/button/Button';
import { ThemeProvider } from 'styled-components';
import { agro } from './src/theme/theme';
import IngresarDinero from './src/templates/IngresarDinero';


export default function App() {
  return (
    <View style={styles.main}>
       <View style={styles.container}>

        <Button size='small' variant='filled' >Botón</Button>
        <Button size='medium' variant='filled'>Botón</Button>
        <Button size='large' variant='filled'>Botón</Button>
        <Button size='large' variant='filled' disabled>Botón</Button>

      </View>
      <View style={styles.container}>

        <Button size='small' variant='outlined'>Botón</Button>
        <Button size='medium' variant='outlined'>Botón</Button>
        <Button size='large' variant='outlined'>Botón</Button>
        <Button size='large' variant='outlined' disabled>Botón</Button>

      </View>
      <View style={styles.container}>

        <Button size='small' variant='link'>Botón</Button>
        <Button size='medium' variant='link'>Botón</Button>
        <Button size='large' variant='link'>Botón</Button>
        <Button size='large' variant='link' disabled>Botón</Button>

      </View>
 

    </View>


  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1, justifyContent: "center", gap: 5
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
  },

});
