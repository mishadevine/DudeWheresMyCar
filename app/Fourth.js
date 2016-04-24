import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Fourth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.foundCar}>
            We Found Your Car!
          </Text>
          <Text style={styles.foundMap}>
          </Text>
        </View>
        <Text style={styles.foundExpl}>
          Here is your car!
        </Text>
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
    flex: 1,
  },
  foundCar: {
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
  foundMap: {
    width: 200,
    height: 200,
    backgroundColor: '#52c14f',
    marginLeft: 180,
  },
  foundExpl: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 200,
  },
  footer: {
    backgroundColor: '#6fc5ee',
    height: 50,
    paddingLeft: 200,
    paddingRight: 200,
  },
});


module.exports = Fourth;
