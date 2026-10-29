/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text, Switch, Pressable } from 'react-native';
import { useState } from 'react';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function PressableScreen() {

  const [encendido, setEncendido] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Practica: Switch y Pressable</Text>

      <Switch
        value={encendido}
        onValueChange={(valor) => setEncendido(valor)}
      />
      <Text style={styles.texto}>
        El switch esta: {encendido ? 'Encendido' : 'Apagado'}
      </Text>

      <Pressable style={styles.boton} onPress={() => setContador(contador + 1)}>
        <Text style={styles.textoBoton}>Presioname</Text>
      </Pressable>

      <Text style={styles.texto}>
        Veces presionado: {contador}
      </Text>

      {/* <Text> Aqui va la practica 11 </Text>
      <Text> Equipo de Karen </Text> */}
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto: {
    fontSize: 18,
    marginVertical: 15,
  },
  boton: {
    backgroundColor: '#fec3e0',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textoBoton: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});