import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

// var Fourth = require('./Fourth');

class Third extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Car Location Pinned"
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      id: 'Fourth'
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.confirmText}>
            {this.state.title}
          </Text>
        </View>
        <Text style={styles.findCarExpl}>
        Your Car Has Been {"\n"}Pinned and saved!
          Click {"\n"}the button below to {"\n"}find your car.
        </Text>
        <View style={styles.wrapper}>
          <TouchableHighlight
            style={styles.backButton}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text style={styles.findCar}>
              Find My Car
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  confirmText: {
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
  wrapper: {
    flex: 1,
  },
  findCar: {
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
  findCarExpl: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
});

module.exports = Third;
