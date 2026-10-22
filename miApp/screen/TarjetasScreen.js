/* 1. ZONA IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function TarjetaScreen() {
  return (

    <View style={styles.container}>
    
      <Perfil nombre= "Andrea Amairani" carrera= "TIID"  materia= "Molvil" cuatrimestre= "4" style= {styles.tarjeta1} />
      <Perfil nombre= "Melany" carrera= "TIID" materia= "Molvil" cuatrimestre= "10" style={styles.tarjeta2} />
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