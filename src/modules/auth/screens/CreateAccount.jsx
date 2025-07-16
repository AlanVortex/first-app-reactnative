

import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Input, Button } from '@rneui/base';

export default function CreateAccount({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Aquí va la lógica de registro
  };

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
      <Input
        placeholder='Confirmar contraseña'
        secureTextEntry={true}
        containerStyle={styles.input}
        onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
      />
      <Button
        title='Registrarse'
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        onPress={handleRegister}
      />
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
});