/* 1. ZONA IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function App() {
  return (

    <View style={styles.container}>
    
      <Perfil nombre= "Andrea Amairani" carrera= "TIID"  materia= "Molvil" cuatrimestre= "4" style= {styles.tarjeta1} />
      <Text> ---------------------------------------------- </Text>
      <Perfil nombre= "Melany" carrera= "TIID" materia= "Molvil" cuatrimestre= "10" style={styles.tarjeta2} />
      <Text> ---------------------------------------------- </Text>
      <Perfil nombre= "Aglae" carrera= "TIID" materia= "Molvil" cuatrimestre= "7" style={styles.tarjeta3} />

      <StatusBar style="auto" />

    </View>
  );
}

/* 3. ZONA ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tarjeta1: {backgroundColor:'lightblue'},
  tarjeta2: {backgroundColor:'lightpink'},
  tarjeta3: {backgroundColor:'gray'},
});