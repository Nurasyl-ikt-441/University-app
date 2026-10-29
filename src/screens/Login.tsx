
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Button from '../components/Button';

type LoginProps = {
  onLogin: (username: string, password: string) => void;
  onForgot: () => void;
  onRegister: () => void;
};

export default function Login({
  onLogin,
  onForgot,
  onRegister,
}: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password) {
      Alert.alert('Attention', 'Please enter your username and password.');
      return;
    }

    onLogin(username.trim(), password);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>
          Sign in to continue!
        </Text>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            Alert.alert('Google', 'Google login will be connected later.')
          }
        >
          <Text style={styles.googleText}>G</Text>
          <Text style={styles.socialText}>Log in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            Alert.alert(
              'Facebook',
              'Facebook login will be connected later.'
            )
          }
        >
          <Text style={styles.facebookText}>f</Text>
          <Text style={styles.socialText}>Log in with Facebook</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#999999"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            placeholderTextColor="#999999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.showText}>
              {showPassword ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        <Button title="Log in" onPress={handleLogin} />

        <TouchableOpacity onPress={onForgot}>
          <Text style={styles.forgotText}>Forget password?</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.registerLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  content: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111111',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111111',
    marginTop: 4,
    marginBottom: 28,
  },
  socialButton: {
    height: 46,
    backgroundColor: '#CCCCCC',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  googleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285F4',
    marginRight: 10,
  },
  facebookText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1877F2',
    marginRight: 10,
  },
  socialText: {
    fontSize: 13,
    color: '#222222',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#999999',
  },
  label: {
    color: '#777777',
    fontSize: 12,
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 20,
    color: '#222222',
  },
  passwordContainer: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  passwordInput: {
    flex: 1,
    color: '#222222',
  },
  showText: {
    color: '#777777',
    fontSize: 12,
    padding: 8,
  },
  forgotText: {
    color: '#922783',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 18,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  registerText: {
    color: '#666666',
    fontSize: 11,
  },
  registerLink: {
    color: '#922783',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
