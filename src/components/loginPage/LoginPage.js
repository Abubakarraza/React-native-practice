import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const submit = () => {
    if (!email || !password) {
      return Alert.alert('Please Type all Fields');
    } else {
      Alert.alert(`Welcom ${email}`);
      navigation.navigate('Home', {email: email});
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assests/wlogo.png')} />

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={email => setEmail(email)}
        style={styles.input}
        keyboardType="email-address"
        multiline={false}
        autoCorrect={false}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.input}
        secureTextEntry={true}
        maxLength={15}
        multiline={false}
        autoCorrect={false}
      />

      <View style={styles.wrapper}>
        <CheckBox value={agree} onChange={() => setAgree(!agree)} />
        <Text>I agree terms and condition</Text>
      </View>
      <TouchableOpacity
        disabled={!agree}
        onPress={() => submit()}
        style={[styles.btn, {backgroundColor: agree ? '#5DADE2' : '#D6DBDF'}]}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    paddingVertical: 20,
  },
  loginText: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '70%',
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: '#D6EAF8',
    textAlign: 'center',
    borderColor: 'black',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: 'white',
    padding: 5,
    marginBottom: 40,
  },
  btn: {
    height: 40,
    width: '70%',

    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
  },
  wrapper: {
    width: '65%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,

    alignItems: 'center',
  },
});

export default LoginPage;
