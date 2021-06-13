import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';

const ButtonAtom = () => {
  return (
    <SafeAreaView>
      <Button title="Submit" style={styles.submitButton}  color="#0077a8"  />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default ButtonAtom;
