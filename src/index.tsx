import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default App;
