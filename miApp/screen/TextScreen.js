/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text, Alert, TextInput, Platform, Button} from 'react-native';
import { useState} from 'react';

const mostrarAlerta = (titulo, mensaje) => {
  if(Platform.OS === 'web') {
    window.alert(`${titulo} \n\n ${mensaje}`);
  }
  else {
    Alert.alert(titulo, mensaje);
  }
}

/* 2. ZONA MAIN (componentes ó Screens) */
export default function TextScreen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const registrar = () => {
    const faltantes = [];
    if(nombre.trim === ''){
      faltantes.push('Nombre');
    }
    if(correo.trim === ''){
      correo.push('Correo');
    }
    if(telefono.trim === ''){
      telefono.push('Telefono');
  }

  if (faltantes.length > 0) {
    mostrarAlerta('Faltan datos' , 'Completa' + faltantes.join(','));
    return;
  }

  if (!correo.includes('@')) {
    mostrarAlerta('Correo invalido' , 'el correo debe tener el formato correcto');
    return;
  }

  if (telefono.length!==10) {
    mostrarAlerta('Telefono invalido' , 'debe de tener 10 digitos');
    return;
  }

  mostrarAlerta('Datos registrados correctamente' , `Nombre: ${nombre} \n Correo: ${correo} \n Telefono: ${telefono}`)
  setNombre('');
  setCorreo('');
  setTelefono('');
}
  return (
    <View style={styles.container}>
      <Text style={styles.tirulo}> Registro de Datos </Text>
      <TextInput
      style={styles.input}
      placeholder="Nombre"
      value = {nombre}
      onChangeText={setNombre}
      />

      <TextInput
      style={styles.input}
      placeholder="Correo"
      value = {correo}
      onChangeText={setCorreo}
      keyboardType="email-address"
      autoCapitalize="none"
      />

      <TextInput
      style={styles.input}
      placeholder="Telefono"
      value = {telefono}
      onChangeText={setTelefono}
      keyboardType='numeric'
      maxLength={10}
      />

      <Button title= 'Registrar' onPress={registrar}/>
        {/* <Text> Aqui va la practica 12 </Text>
        <Text> Equipo de Jesus </Text> */}
    </View>
  );
}

/* 3. ZONA ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7cde9',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#6d1b4f',
    borderRadius: 8,
    padding: 10,
    marginBottom:12,
  },
});