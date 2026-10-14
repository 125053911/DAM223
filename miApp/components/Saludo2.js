import {Text, Button, View, Image} from 'react-native';

export const Saludo2 = ()=>{
    return(

        <View>

        <Text> Hola RN: Desde un componente propio. </Text>
        <Image  source={require('../assets/wave.png')} />
        <Button title="Presiona para saludar"> </Button>

        </View>
    )
}