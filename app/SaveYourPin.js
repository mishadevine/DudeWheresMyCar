import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native';

var api = require('./utilities/api');

class SaveYourPin extends Component {
  constructor(props){
  super(props);
  this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2 });
  this.state = {
    pin : "",
    error: '',
    dataSource: this.ds.cloneWithRows(this.props.passProps.pins)
  }
}

onButtonPress(){
  this.props.navigator.pop ({
  });
}

handleChange(e){
  this.setState({
    pin: e.nativeEvent.text
  })
}

handleSubmit(){
  var pin = this.state.pin;
  this.setState({
    pin: ''
  });
  api.addPin(pin)
    .then((date) => {
      api.getPins()
        .then((data) => {
          this.setState({
            dataSource: this.ds.cloneWithRows(data)
          })
        });
    })
    .catch((error) => {
      console.log('Request failed', error);
      this.setState({error})
    });
}

submitBar(){
  return (
    <View style={styles.footerContainer}>
      <TextInput
        style={styles.searchInput}
        value={this.state.pin}
        onChange={this.handleChange.bind(this)}
        placeholder="New Pin" />
      <TouchableHighlight
        style={styles.button}
        onPress={this.handleSubmit.bind(this)}
        underlayColor="#88d4f5"
        >
          <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
    </View>
  )
}

renderRow(rowData){
  return (

      <View style={styles.rowContainer}>
        <Text> {rowData} </Text>
      </View>

  )
}

render(){
  return (
    <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        />
        {this.submitBar()}
    </View>
  )
}
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // wrapper: {
  //   flex:1,
  // },
  // footer: {
  //   backgroundColor: '#6fc5ee',
  //   height: 50,
  //   paddingLeft: 200,
  //   paddingRight: 200,
  // },
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    height: 60,
    backgroundColor: '#48bbec',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10,
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: '#dddfd4',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

module.exports = SaveYourPin;
