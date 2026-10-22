/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text } from 'react-native';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function TextInputScreen() {
  return (
    <View style={styles.container}>
        <Text> Aqui va la practica 12 </Text>
        <Text> Equipo de Jesus </Text>
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