import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput
} from 'react-native';

const InputBoxAtom = () => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
      },
});

export default InputBoxAtom;
