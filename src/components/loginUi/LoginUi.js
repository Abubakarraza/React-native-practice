import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../../context/AuthContext';

const LoginUi = ({navigation}) => {
  const [agree, setagree] = useState(true);
  const {login, logout} = useContext(AuthContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const onSubmitHandler = () => {
    if (!email || !password) {
      return Alert.alert('Please type all Field');
    } else {
      login();
    }
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assests/login.jpg')}
            style={{
              width: '55%',
              height: undefined,
              aspectRatio: 1.5,
              transform: [{rotate: '-5deg'}],
            }}
          />
        </View>
        <Text style={{fontSize: 28, color: '#333', fontWeight: '700'}}>
          Login
        </Text>
        <View
          style={[
            styles.input,
            {borderBottomWidth: 1, borderBottomColor: '#666'},
          ]}>
          <MaterialIcon
            name="alternate-email"
            size={24}
            style={{paddingTop: 12, color: '#AD40AF'}}
          />
          <TextInput
            placeholder="Enter Email"
            keyboardType="email-address"
            onChangeText={e => setemail(e)}
            value={email}
          />
        </View>
        <KeyboardAvoidingView>
          <View
            style={[
              styles.wrapper,
              {borderBottomWidth: 1, borderBottomColor: '#666'},
            ]}>
            <View style={[styles.input, {flex: 1}]}>
              <MaterialIcon
                name="lock-outline"
                size={24}
                style={{paddingTop: 12, color: '#AD40AF'}}
              />
              <TextInput
                placeholder="Enter Password"
                secureTextEntry={agree}
                keyboardType="default"
                value={password}
                onChangeText={e => setpassword(e)}
              />
            </View>
            <TouchableOpacity onPress={() => setagree(!agree)}>
              {agree ? (
                <Entypo
                  name="eye"
                  size={24}
                  style={{color: '#AD40AF', paddingTop: 28}}
                />
              ) : (
                <Entypo
                  name="eye-with-line"
                  size={24}
                  style={{color: '#AD40AF', paddingTop: 28}}
                />
              )}
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity>
          <Text style={{textAlign: 'center', color: '#AD40AF', marginTop: 20}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={onSubmitHandler}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: '#666', marginTop: 20}}>
          Or Login with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <Image
            source={require('../../assests/fb.jpg')}
            style={{width: 30, height: 30}}
          />
          <Image
            source={require('../../assests/twitter.jpg')}
            style={{width: 30, height: 30}}
          />
          <Image
            source={require('../../assests/google.jpg')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text style={{color: '#666'}}>Next to the App?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: '#AD40AF',
                marginLeft: 4,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  input: {
    flexDirection: 'row',
    marginTop: 19,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: '80%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#AD40AF',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
});

export default LoginUi;
