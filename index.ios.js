import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  AsyncStorage,
  View
} from 'react-native';
import Signup from './app/Signup';
import Account from './app/Account';
import Firebase from 'firebase';

let app = new Firebase("https://dudewheresmycar.firebaseio.com/");

var First = require('./app/First');
var Second = require('./app/Second');
var Third = require('./app/components/Third');
var Fourth = require('./app/Fourth');
var Error = require('./app/Error');
var Repin = require('./app/Repin');
var SaveYourPin = require('./app/SaveYourPin');
var MapExample = require('./app/MapExample');
var Login = require('./app/Login');

class WheresMyCar extends Component {

  constructor(props){
    super(props);
    this.state = {
      component: null,
      loaded: false
    };
  }

  componentWillMount(){


    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let component = {component: Login};
      if(user_data != null){
        app.authWithCustomToken(user_data.token, (error, authData) => {
          if(error){
            this.setState(component);
          }else{
            this.setState({component: Account});
          }
        });
      }else{
        this.setState(component);
      }
    });

  }

  render() {

      if(this.state.component){
      return (
        <Navigator
          initialRoute={{component: this.state.component}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }else{
      return (
        <View style={styles.container}>

          <View style={styles.body}></View>
        </View>
      );
    }

  }


  // navigatorRenderScene(route, navigator){
  //   _navigator = navigator;
  //   switch (route.id) {
  //     case 'First':
  //       return (<First passProps={route.passProps}
  //       navigator={navigator} title="First" />);
  //     case 'Second':
  //       return (<Second passProps={route.passProps}
  //       navigator={navigator} title="Second" />);
  //     case 'Third':
  //       return (<Third passProps={route.passProps}
  //       navigator={navigator} title="Third" />);
  //     case 'Fourth':
  //       return (<Fourth passProps={route.passProps}
  //       navigator={navigator} title="Fourth" />);
  //     case 'Error':
  //       return (<Error passProps={route.passProps}
  //       navigator={navigator} title="Error" />);
  //     case 'Repin':
  //       return (<Repin passProps={route.passProps}
  //       navigator={navigator} title="Repin" />);
  //     case 'SaveYourPin':
  //       return (<SaveYourPin passProps={route.passProps}
  //       navigator={navigator} title="SaveYourPin" />);
  //     case 'MapExample':
  //       return (<MapExample passProps={route.passProps}
  //       navigator={navigator} title="MapExample" />);
  //     case 'Login':
  //       return (<Login passProps={route.passProps}
  //       navigator={navigator} title="Login" />);
  //     case 'Signup':
  //       return (<Signup passProps={route.passProps}
  //       navigator={navigator} title="Signup" />);
  //     case 'Account':
  //       return (<Account passProps={route.passProps}
  //       navigator={navigator} title="Account" />);
  //     }
  //  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('WheresMyCar', () => WheresMyCar);
