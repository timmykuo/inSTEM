import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Videos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Videos!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
