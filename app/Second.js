import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var Third = require('./components/Third');

class Second extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  onButtonPress() {
    this.props.navigator.push({
      id: 'Error',
      passProps: true
    });
  }
  onButtonBack() {
    this.props.navigator.push({
      id: 'First'
    });
  }

  componentWillMount(){
    this.setState = ({
      pinState: this.props.passProps
    });
  }

  render() {
    console.log("Testing", this.props.passProps);
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.pinCar}>
            Are You Sure?
          </Text>
          <Text style={styles.circle}>
          </Text>
        </View>


          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.tapHighlight}
              onPress={this.onButtonPress.bind(this)}
              >
              <Text style={styles.confirmPin}>
                Is this the correct location?{"\n"}
                  Tap to confirm
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.tapHighlight}
              onPress={this.onButtonBack.bind(this)}
              >
              <Text style={styles.buttonBack}>
                Tap here todo{"\n"}
                  repin your car
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
  wrapper: {
    flex:1,
  },
  circle: {
    height: 200,
    width: 200,
    marginLeft: 170,
    borderRadius: 100,
    backgroundColor: '#52c14f',
  },
  confirmPin: {
    backgroundColor: '#52c14f',
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    marginBottom: 20,
    // fontSize: 20,
    textAlign: 'center',
  },
  buttonBack: {
    backgroundColor: '#52c14f',
    padding: 20,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
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
  footer: {
    backgroundColor: '#6fc5ee',
    height: 50,
    paddingLeft: 200,
    paddingRight: 200,
  },
});

module.exports = Second;
