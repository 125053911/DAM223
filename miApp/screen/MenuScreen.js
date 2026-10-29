/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetaScreen from './TarjetasScreen';
import TextScreen from './TextScreen';
import FlatScreen from './FlatScreen';
import ImageScreen from './ImageScreen';
import ModalScreen from './ModalScreen';
import ActivityScreen from './ActivityScreen';

/* 2. ZONA MAIN (componentes ó Screens) */
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');
  const volver = () => setScreen('menu');

  switch (screen) {
    case 'safe':
      return <SafeScreen onBack={volver} />;
    case 'press':
      return <PressableScreen onBack={volver} />;
    case 'tarjetas':
      return <TarjetaScreen onBack={volver} />;
    case 'TextScreen':
      return <TextScreen onBack={volver} />;
    case 'FlatScreen':
      return <FlatScreen onBack={volver} />;
    case 'ImageScreen':
      return <ImageScreen onBack={volver} />;
    case 'ModalScreen':
      return <ModalScreen onBack={volver} />;
    case 'ActivityScreen':
      return <ActivityScreen onBack={volver} />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text> Menu de practicas </Text>
          <Text> ----------------------------------------- </Text>
          <Button title="Practica SafeScreen" onPress={() => setScreen('safe')} />
          <Text> ----------------------------------------- </Text>
          <Button title="Practica Pressable" onPress={() => setScreen('press')} />
          <Text> ----------------------------------------- </Text>
          <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />
          <Text> ----------------------------------------- </Text>
          <Button title="Practica TextScreen" onPress={() => setScreen('TextScreen')} />
          <Text> ----------------------------------------- </Text>
          <Button title="Practica FlatScreen" onPress={() => setScreen('FlatScreen')} />
          <Text> ----------------------------------------- </Text>
          <Button title="Practica ImageScreen" onPress={() => setScreen('ImageScreen')} />
          <Text> ----------------------------------------- </Text>
          <Button title="Practica ModalScreen" onPress={() => setScreen('ModalScreen')} />
          <Text> ----------------------------------------- </Text>
          <Button title="Practica ActivityScreen" onPress={() => setScreen('ActivityScreen')} />
        </View>
      );
  }
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