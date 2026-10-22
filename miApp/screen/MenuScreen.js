/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import  SafeScreen  from './SafeScreen';
import  PressableScreen  from './PressableScreen';
import  TarjetaScreen  from './TarjetasScreen';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen) {
        case 'safe':
            return <SafeScreen/>;
        case 'press':
            return <PressableScreen/>;
        case 'tarjetas':
            return <TarjetaScreen/>;
        case 'TextInput':
            return <TextInputScreen/>;    
        case 'menu':
            default:
            return (
               <View style={styles.container}>
                <Text> Menu de practicas </Text>
                <Text> ----------------------------------------- </Text>
                <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')}/>
                <Text> ----------------------------------------- </Text>
                <Button title="Practica SafeAreaView" onPress={() => setScreen('safe')}/>
                <Text> ----------------------------------------- </Text>
                <Button title="Practica Pressable" onPress={() => setScreen('press')}/>
                <Text> ----------------------------------------- </Text>
                <Button title="Practica TextInput" onPress={() => setScreen('TextInputScreen')}/>    
                </View>
            );
        } //Switch
} //Funcion

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