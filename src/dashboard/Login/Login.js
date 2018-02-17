import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Image style={styles.backgroundImage} source={require('./loginPic.jpg')}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../images/logoWhite.png')}
              />
          </View>
          <View style={styles.loginContainer}>
            <TextInput
              placeholder="email"
              returnKeyType="next"
              style={styles.input}
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              placeholder="password"
              returnKeyType="next"
              secureTextEntry
              style={styles.input}
              ref={(input) => this.passwordInput = input}
              onSubmitEditing={() => this.confirmPassInput.focus()}
            />
            <TextInput
              placeholder="confirm password"
              returnKeyType="go"
              secureTextEntry
              style={styles.input}
              ref={(input) => this.confirmPassInput = input}
              onSubmitEditing={() => navigate('SetUp')}
            />
            <TouchableOpacity onPress={() => navigate('SetUp')} style={styles.signUpButton}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

          {/*styling or*/}
            <View style={styles.separator}>
              <View style={styles.horizLine} />
            </View>
            <TouchableOpacity onPress={() => navigate('Main')} style={styles.signUpButton}>
              <Text style={styles.buttonText}>SIGN UP W/ FACEBOOK</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footButtonsContainer}>
            <TouchableOpacity style={styles.footButton} onPress={() => navigate('Main')}>
              <Text style={styles.footButtonText}>Already have an account?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footButton} onPress={() => navigate('Main')}>
              <Text style={styles.footButtonText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}
//figure out auth for login
//facebook login info: https://firebase.google.com/docs/auth/web/facebook-login


const styles = StyleSheet.create({
  backgroundImage: {
    flex:1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  loginContainer: {
    padding: 20,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  signUpButton: {
    backgroundColor: 'rgba(41, 128, 185, 0.8)',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  footButtonsContainer: {
    padding: 0,
    margin: 0
  },
  footButton: {
    padding: 3,
    margin: 0
  },
  footButtonText: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 1.0)',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  separator: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  horizLine: {
    flex:1,
    width: 4,
    height: 2,
    backgroundColor: '#dddddd',
    marginVertical: 15
  }
});
