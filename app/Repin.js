import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var Third = require('./components/Third');

class Repin extends Component {
  onButtonPress() {
    this.props.navigator.push({
      id: 'Third'
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.repinText}>
            Repin Your Car.
          </Text>
          <Text style={styles.circle}>
          </Text>
        </View>
        <TouchableHighlight
          style={styles.tapRepin}
          onPress={this.onButtonPress.bind(this)}
          >
          <View style={styles.repinButtonContainer}>
          <Text style={styles.repinButton}>
            Repin My Car
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
  repinText: {
    fontSize: 20,
    fontFamily: "Krungthep",
    textAlign: 'center',
    backgroundColor: '#6fc5ee',
    paddingLeft: 200,
    paddingRight: 200,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 100,
  },
  circle: {
    height: 200,
    width: 200,
    marginLeft: 160,
    borderRadius: 100,
    backgroundColor: '#52c14f',
  },
  repinButton: {
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

module.exports = Repin;
