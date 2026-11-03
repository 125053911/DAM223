/* 1. ZONA DE IMPORTACIONES */
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, Switch, TextInput } from 'react-native';

/* 2. ZONA MAIN */
export default function RegistroScreen() {
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const registrar = () => {
        const faltantes = [];
        if (nombre.trim() === '') {
            faltantes.push('Nombre');
        }
        if (carrera.trim() === '') {
            faltantes.push('Carrera');
        }
        if (semestre.trim() === '') {
            faltantes.push('Semestre');
        }
        if (faltantes.length > 0) {
            Alert.alert('Datos incompletos', `Completa: ${faltantes.join(', ')}`);
            return;
        }

        if (isNaN(semestre)) {
            Alert.alert('Error', 'El semestre debe ser un número.');
            return;
        }

        Alert.alert(
            'Registro enviado',
            `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\n` +
            `Taller: ${taller ? 'Sí' : 'No'}\n` +
            `Constancia: ${constancia ? 'Sí' : 'No'}\n` +
            `Deportes: ${deportes ? 'Sí' : 'No'}`
        );

        setNombre('');
        setCarrera('');
        setSemestre('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Evento Universitario</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
            />

            <TextInput
                style={styles.input}
                placeholder="Semestre"
                value={semestre}
                onChangeText={setSemestre}
                keyboardType="numeric"
            />

            <Text style={styles.subtitulo}>Opciones</Text>

            <View style={styles.fila}>
                <Text style={styles.texto}>¿Asistirá al taller?</Text>
                <Switch value={taller} onValueChange={setTaller} />
            </View>

            <View style={styles.fila}>
                <Text style={styles.texto}>¿Requiere constancia?</Text>
                <Switch value={constancia} onValueChange={setConstancia} />
            </View>

            <View style={styles.fila}>
                <Text style={styles.texto}>¿Participará en deportes?</Text>
                <Switch value={deportes} onValueChange={setDeportes} />
            </View>

            <View style={styles.boton}>
                <Button title="Enviar Registro" onPress={registrar} />
            </View>
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
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        width: '100%',
        backgroundColor: '#fdfcfd',
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 8,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 8,
    },
    texto: {
        fontSize: 16,
        flexShrink: 1,
        marginRight: 8,
    },
    boton: {
        marginTop: 24,
        width: '100%',
    },
});