import React from 'react';
import {
  Button, StyleSheet, Text, View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const FirstTab = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Content on the first tab</Text>
    <Button title="Go Home" onPress={() => {
      navigation.navigate('Home')
    }} />
  </View>
);

export default FirstTab;