/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text } from 'react-native';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function ActivityScreen() {
  return (
    <View style={styles.container}>
        <Text> Aqui va la practica 16 </Text>
        <Text> Equipo de Schoenstatt </Text>
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