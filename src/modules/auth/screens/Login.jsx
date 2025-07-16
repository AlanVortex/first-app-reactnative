
import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from '@rneui/base';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // lógica de login
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://st.mextudia.com/wp-content/uploads/2022/07/logo-UTEZ.jpg' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Input
        keyboardType='email-address'
        placeholder='Correo electrónico'
        containerStyle={styles.input}
        onChange={(e) => setEmail(e.nativeEvent.text)}
      />
      <Input
        placeholder='Contraseña'
        secureTextEntry={true}
        containerStyle={styles.input}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      <Button
        title='Iniciar sesión'
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        onPress={handleLogin}
      />
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.registerLink}>Crear una</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 15,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#029575',
    borderRadius: 14,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#333',
  },
  registerLink: {
    fontSize: 16,
    color: '#029575',
    marginLeft: 6,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});