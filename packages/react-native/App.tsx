import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CromaText from './src/components/text/Text';

export default function App() {
  return (
    <View style={styles.container}>
      <CromaText $component='h1' $variant='bold'>test</CromaText>
      <CromaText $component='h1' $variant='semibold'>test</CromaText>
      <CromaText $component='h1' $variant='regular'>test</CromaText>
      <CromaText $component='bodyLg' $variant='regular'>Body regular</CromaText>
      <CromaText $component='bodyMd' $variant='semibold'>Body semibold</CromaText>
      <CromaText $component='bodySm' $variant='bold'>Body bold</CromaText>
      <CromaText $component='caption' $variant='caption'>Caption error</CromaText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
