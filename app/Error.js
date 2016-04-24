import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var Repin = require('./Repin');

class Error extends Component {
  onButtonPress() {
    this.props.navigator.push({
      id: 'Repin'
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.errorText}>
            There Has Been An Error.
          </Text>
        </View>
        <Text style={styles.pinError}>
        An Error Has Occured.{"\n"}
          Click the button below {"\n"} to repin your car.
        </Text>
        <View style={styles.wrapper}>
          <TouchableHighlight
            style={styles.repinCar}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text style={styles.repinCarText}>
              Repin My Car
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
        <Text>

        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    flex: 1,
  },
  errorText: {
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
  pinError: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  repinCarText: {
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

module.exports = Error;
