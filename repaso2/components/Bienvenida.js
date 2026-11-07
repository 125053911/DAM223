import { Text, StyleSheet, View, Image } from "react-native";

// Imagen del libro
const IMAGEN_LIBRO = {
  uri: "https://i.pinimg.com/736x/84/1c/1e/841c1e3d72d48aaa31c54e7e8a5b1c84.jpg",
};

export default function Bienvenida() {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGEN_LIBRO}
        style={styles.imagen}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Bienvenido a nuestro Repaso 2</Text>

      <View style={styles.equipoBlock}>
        <Text style={styles.equipoEtiqueta}>Equipo:</Text>
        <Text style={styles.integrante}>Bretón Téllez René Alberto</Text>
        <Text style={styles.integrante}>Galván Ramírez Andrea Amairani</Text>
        <Text style={styles.integrante}>Rangel Campos Schoenstatt Judith</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FCE4EC',
  },

  imagen: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A0E24',
    marginBottom: 20,
  },

  equipoBlock: {
    width: '100%',
    maxWidth: 350,
  },

  equipoEtiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800F2F',
    marginBottom: 8,
  },

  integrante: {
    fontSize: 15,
    color: '#A0345A',
    marginVertical: 3,
    paddingLeft: 8,
  },
});