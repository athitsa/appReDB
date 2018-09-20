import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
/* Other dependency libs */
import axios from 'axios';
//import HTMLView from 'react-native-htmlview';


type Props = {};
export default class App extends Component<Props> {

  /* Before app load */
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      result: ''
    };

  }

  /* Event  */
  onClickButton() {
    /* Exsample setstate */
    //const url = `http://178.128.56.60:3030/api/${this.state.query}`
    this.setState({query: ''})
    const url = `https://www.google.co.th/search?q${this.state.query}`
    this.setState({query: url})
    /* axios start sent get request */
    axios.get(url)
      .then(res => this.setState({result: res.data}))
  }

  /* Render UI */
  render() {
    return (
      <View style={styles.container}>
        {/* Text1 */}
        <Text 
          style={styles.startText}>Search from Google 
        </Text>

        {/* Textinput */}
        <TextInput
          placeholder="Key search ... " 
          onChangeText={(query) => this.setState({query})} >
        </TextInput>

        {/* Button */}
        <Button 
          onPress={this.onClickButton.bind(this)} 
          title="Submit" />

        {/* Text2 */}
        <Text 
          style={styles.startText}>
          {this.state.query}
          {/* {this.state.result} */}
        </Text>

        {/* Show Website from HTML string */}
        {/* <HTMLView
          value={this.state.result}
        /> */}
      </View>
    );
  }
} // END App

// CSS VARIABLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  startText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
