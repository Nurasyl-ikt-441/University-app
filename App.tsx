
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Login from './src/screens/Login';

type Screen = 'login' | 'forgot' | 'register';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  if (screen === 'forgot') {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setScreen('login')}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Password recovery screen
        </Text>
      </View>
    );
  }

  if (screen === 'register') {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setScreen('login')}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Registration screen
        </Text>
      </View>
    );
  }

  return (
    <Login
      onLogin={(username, password) => {
        console.log('Username:', username);
        console.log('Password entered');
      }}
      onForgot={() => setScreen('forgot')}
      onRegister={() => setScreen('register')}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#922783',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777777',
    marginTop: 12,
  },
  back: {
    color: '#922783',
    fontSize: 18,
  },
});
