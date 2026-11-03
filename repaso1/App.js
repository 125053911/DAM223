import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, ScrollView, Switch, TextInput } from 'react-native';
import RegistroScreen from './screens/RegistroScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistroScreen />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />   */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
