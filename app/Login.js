'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';

import Button from './components/Button';
import Header from './components/Header';

import Signup from './Signup';
import Account from './Account';

import Firebase from 'firebase';

let app = new Firebase("https://dudewheresmycar.firebaseio.com/");

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  login(){

    this.setState({
      loaded: false
    });

    app.authWithPassword({
      "email": this.state.email,
      "password": this.state.password
    }, (error, user_data) => {
      this.setState({
        loaded: true
      });

      if(error){
        alert('Login Failed. Please Try again');
      }else{
        AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        this.props.navigator.push({
          component: Account
        });
      }
    });

  }

  goToSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.login}>
            Login
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.email}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address"}
          />
          <TextInput
            style={styles.password}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />

          <Button
            text="Login"
            onpress={this.login.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />

          <Button
            text="Create New Account"
            onpress={this.goToSignup.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
        </View>
        <View style={styles.footer}>
        <Text>

        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    flex:1,
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#6fc5ee',
    paddingLeft: 200,
    paddingRight: 200,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 100,
    fontFamily: "Krungthep",
  },
  email: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: '#0485A9',
    borderWidth: 1,
    marginTop: -400,
    marginBottom: 10,
  },
  password: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: '#0485A9',
    borderWidth: 1,
  },
  transparent_button: {
    marginTop: 10,
    padding: 15,
    marginLeft: 50,
  },
  transparent_button_text: {
    color: '#0485A9',
    fontSize: 16,
  },
  primary_button: {
    backgroundColor: '#52c14f',
    padding: 20,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 5,
    marginTop: 40,
    marginLeft: 50,
  },
  primary_button_text: {
    color: 'black',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#6fc5ee',
    height: 50,
    paddingLeft: 200,
    paddingRight: 200,
  },
});

module.exports = Login;
