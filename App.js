/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
    TextInput,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props)
      this.state = {
        text:'',
          height:0
      };
    this.onChange = this.onChange.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this)
  }
  onChange(event) {
    this.setState({
        text:event.nativeEvent.text,
    })
  }

  onContentSizeChange(event) {
      console.log('-----------')

      console.log(this)
      this.setState({height: event.nativeEvent.contentSize.height});
  }

  render() {
    return (
      <TextInput {...this.props}
                     multiline={true}
                 onChange={this.onChange}
                 onContentSizeChange={this.onContentSizeChange}
                 style={[styles.textInputStyle,{height:Math.max(35,this.state.height)}]}
                 value={this.state.text}

      />
    );
  }
}

const styles = StyleSheet.create({
    textInputStyle: { //文本输入组件样式
        width: 300,
        height: 30,
        fontSize: 20,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "grey"
    }
});
