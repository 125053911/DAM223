/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text, Button } from 'react-native';
import  MenuScreen  from './screen/MenuScreen';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen />
    </View>
  );
}

/* 3. ZONA ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});