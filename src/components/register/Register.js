import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
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

const Register = ({navigation}) => {
  const [agree, setagree] = useState(true);
  const [agree1, setagree1] = useState(true);
  const [date, setDate] = useState(new Date());
  const [dobLabel, setdobLabel] = useState('Date of Birth');
  const [open, setOpen] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const onSubmitHandler = () => {
    if (!name || !email || !password || !cpassword) {
      return Alert.alert('Please type all Field');
    } else {
      navigation.navigate('Login');
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
              transform: [{rotate: '5deg'}],
            }}
          />
        </View>
        <Text style={{fontSize: 28, color: '#333', fontWeight: '700'}}>
          Register
        </Text>
        <View
          style={[
            styles.input,
            {borderBottomWidth: 1, borderBottomColor: '#666'},
          ]}>
          <MaterialIcon
            name="person-outline"
            size={24}
            style={{paddingTop: 12, color: '#AD40AF'}}
          />
          <TextInput
            placeholder="FullName"
            keyboardType="default"
            value={name}
            onChangeText={name => setname(name)}
          />
        </View>
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
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={email => setemail(email)}
          />
        </View>
        <KeyboardAvoidingView>
          <View
            style={[
              styles.wrapper,
              {borderBottomWidth: 1, borderBottomColor: '#666'},
            ]}>
            <View style={[styles.input, {}]}>
              <MaterialIcon
                name="lock-outline"
                size={24}
                style={{paddingTop: 12, color: '#AD40AF'}}
              />
              <TextInput
                placeholder="Password"
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
          <View
            style={[
              styles.wrapper,
              {borderBottomWidth: 1, borderBottomColor: '#666'},
            ]}>
            <View style={[styles.input, {}]}>
              <MaterialIcon
                name="lock-outline"
                size={24}
                style={{paddingTop: 12, color: '#AD40AF'}}
              />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={agree1}
                keyboardType="default"
                value={cpassword}
                onChangeText={e => setcpassword(e)}
              />
            </View>
            <TouchableOpacity onPress={() => setagree1(!agree1)}>
              {agree1 ? (
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
          <View
            style={[
              styles.input,
              {
                borderBottomWidth: 1,
                borderBottomColor: '#666',
                paddingBottom: 12,
              },
            ]}>
            <MaterialIcon
              name="date-range"
              size={24}
              style={{paddingTop: 0, color: '#AD40AF'}}
            />
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text style={{color: '#666', marginLeft: 7}}>{dobLabel}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              maximumDate={new Date('2010-01-01')}
              minimumDate={new Date('1940-01-01')}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
                setdobLabel(date.toDateString());
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.btn} onPress={onSubmitHandler}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
            Register
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: '#666', marginTop: 20}}>
          Or Register with
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
          <Text style={{color: '#666'}}>Already have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: '#AD40AF',
                marginLeft: 4,
              }}>
              Login
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

export default Register;
