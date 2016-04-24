var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'mapRef';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar
} from 'react-native';

var Second = require('./Second');

class First extends Component {

  constructor(props){
    super(props);
    this.state = {
      pinStatus: false
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      id: 'Second',
      passProps: this.state.pinStatus
    })
  }

  login() {
    this.props.navigator.push({
      id: 'Login',
    })
  }

  render() {
    StatusBar.setHidden(true);
    console.log("first testing", this.state.pinStatus);
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.pinCar}>
            Pin Your Car Now!
          </Text>
          <TouchableHighlight
            style={styles.loginButton}
            onPress={this.login.bind(this)}
            >
            <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Login
            </Text>
            </View>
          </TouchableHighlight>
          <Text style={styles.circle}>
          </Text>
        </View>

        <TouchableHighlight
          style={styles.tapHighlight}
          onPress={this.onButtonPress.bind(this)}
          >
          <View style={styles.buttonContainer}>
          <Text style={styles.pinButton}>
            Pin My Car
          </Text>
          </View>
        </TouchableHighlight>
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
  pinCar: {
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
  loginText: {
    width: 90,
    marginTop: -140,
    marginLeft: 390,
    textAlign: 'center',
  },
  circle: {
    height: 200,
    width: 200,
    marginLeft: 190,
    borderRadius: 100,
    backgroundColor: '#52c14f',
  },
  pinButton: {
    backgroundColor: '#52c14f',
    padding: 20,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 5,
    marginBottom: 100,
  },
  footer: {
    backgroundColor: '#6fc5ee',
    height: 50,
    paddingLeft: 200,
    paddingRight: 200,
  },
});

module.exports = First;
