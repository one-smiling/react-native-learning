import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});




// const ProfileScreen = () => (
//   <View style={styles.container}>
//     <Text style={styles.welcome}>
//       Profile Screen
//     </Text>
//   </View>
// );

class ProfileScreen extends React.Component {

  render () {
    const dispatch = this.props.navigation.dispatch
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Screen
        </Text>
        <Button
        onPress={() =>
          dispatch(NavigationActions.back())}
        title="NavigationActions.back()"
        />
        <Button
        onPress={() =>this.props.navigation.goBack()}
        title="navigation.goBack()"
        />
      </View>
    )
  }
}


ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;
