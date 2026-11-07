import { useState } from "react";
import { TextInput, View, Text, FlatList, Alert, Button, Platform, ActivityIndicator, ImageBackground, StyleSheet } from "react-native";

// Imagen de fondo
const IMAGEN_FONDO = {
  uri: "https://i.pinimg.com/1200x/08/eb/d9/08ebd90c21bbe102d004d5dc0da7f7fc.jpg",
};

const alerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

export default function Libreria() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [indicator, setIndicator] = useState(true);
  const [libros, setLibros] = useState([
    { id: 1, titulo: "Leyendas", autor: "Ramon", genero: "Generoso" },
    { id: 2, titulo: "Don Quijote de la mancha", autor: "rene", genero: "Ciencia " }
  ]);

  const nuevoLibro = {
    id: libros.length + 1,
    titulo: titulo,
    autor: autor,
    genero: genero
  };

  const tiempo = () => {
    setIndicator(true);
    setLibros([...libros, nuevoLibro]);
  };

  const registrar = () => {
    const faltantes = [];
    if (titulo.trim() === '') faltantes.push("Titulo");
    if (autor.trim() === '') faltantes.push("Autor");
    if (genero.trim() === '') faltantes.push("Genero");

    if (faltantes.length > 0) {
      alerta("Faltan Datos", "Completa " + faltantes.join(","));
      return;
    }
    alerta("Datos correctos", "Libro registrado con exito");

    setIndicator(false);
    setAutor("");
    setTitulo("");
    setGenero("");
    setTimeout(() => tiempo(), 4000);
  };

  return (
    <ImageBackground
      source={IMAGEN_FONDO}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* TITULO DE LA PANTALLA */}
        <Text style={styles.tituloPantalla}>Catálogo de Libros</Text>

        {/* ENTRADAS DE TEXTO */}
        <TextInput
          placeholder="Titulo de libro"
          placeholderTextColor="#A0345A"
          value={titulo}
          onChangeText={setTitulo}
          style={styles.input}
        />
        <TextInput
          placeholder="Autor"
          placeholderTextColor="#A0345A"
          value={autor}
          onChangeText={setAutor}
          style={styles.input}
        />
        <TextInput
          placeholder="Genero"
          placeholderTextColor="#A0345A"
          value={genero}
          onChangeText={setGenero}
          style={styles.input}
        />

        {/* BOTÓN O CARGANDO */}
        <View style={styles.botonContainer}>
          {indicator ? (
            <Button title="Agregar Libro" color="#C2185B" onPress={registrar} />
          ) : (
            <ActivityIndicator color="#F48FB1" size="large" />
          )}
        </View>

        {/* CONTADOR DE LIBROS */}
        <Text style={styles.contadorTexto}>Libros en total: {libros.length}</Text>

        {/* LISTA DE LIBROS */}
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.tarjetaLibro}>
              <Text style={styles.textoLibro}><Text style={styles.etiqueta}>Titulo:</Text> {item.titulo}</Text>
              <Text style={styles.textoLibro}><Text style={styles.etiqueta}>Autor:</Text> {item.autor}</Text>
              <Text style={styles.textoLibro}><Text style={styles.etiqueta}>Genero:</Text> {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(74, 14, 36, 0.55)',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },

  tituloPantalla: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FCE4EC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#4A0E24',
    borderWidth: 1,
    borderColor: '#F48FB1',
  },

  botonContainer: {
    marginVertical: 20,
  },

  contadorTexto: {
    color: '#FCE4EC',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },

  tarjetaLibro: {
    backgroundColor: 'rgba(252, 228, 236, 0.95)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#800F2F',
  },

  textoLibro: {
    fontSize: 15,
    color: '#800F2F',
    marginVertical: 2,
  },

  etiqueta: {
    fontWeight: 'bold',
    color: '#4A0E24',
  },
});