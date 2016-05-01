'use strict'
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import Button from './components/Button';
import Header from './components/Header';
import Login from './Login';
import Firebase from 'firebase';

let app = new Firebase("https://dudewheresmycar.firebaseio.com/");

class Account extends Component {
  constructor(props){

    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentWillMount(){
      AsyncStorage.getItem('user_data').then((user_data_json
      ) => {
        let user_data = JSON.parse(user_data_json);
        this.setState({
          user: user_data,
          loaded: true
        });
      });
  }

  render(){
     return (
       <View style={styles.container}>
         <View style={styles.wrapper}>
           <Text style={styles.account}>
             Your Account
           </Text>
         </View>
         <View>
            <Button
               text="Logout"
               onpress={this.logout.bind(this)}
               button_styles={styles.primary_button}
               button_text_styles={styles.primary_button_text} />

         </View>
         <View style={styles.footer}>
         <Text>

         </Text>
         </View>
       </View>
     )
  }

  logout(){

    // <Image
    //   style={styles.image}
    //   source={{uri: this.state.user.password.profileImageURL}}
    // />

    AsyncStorage.removeItem('user_data').then(() => {
      app.unauth();
      this.props.navigator.push({
        component: Login
      });
    });

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
  account: {
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

module.exports = Account;
