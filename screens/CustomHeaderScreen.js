import React from 'react';
import {
  Button, Image, StyleSheet, Text, View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const CustomHeaderScreen = ({ navigation }) => (
<View style={styles.container}>
    <Text>I have a custom Header</Text>
    <Button title="Go Back" onPress={() => {
      navigation.goBack()
    }} />
  </View>
);

CustomHeaderScreen.navigationOptions = {
  title: 'My Custom Header',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

// CustomHeaderScreen.navigationOptions = ({ navigation }) => ({
//  title: `Hello ${navigation.getParam('name', 'Unknown')}`
// })

// CustomHeaderScreen.navigationOptions = {
//  headerTitle: () => (<Image source={require('../assets/react.png')} style={{ width: 30, height: 30 }} />),
// }

export default CustomHeaderScreen;