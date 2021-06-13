import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput
} from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import InputBoxAtom from '../atoms/InputBoxAtom';
const InputMolecule = () => {
  return (
    <SafeAreaView>
     <LabelAtom />
     <InputBoxAtom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    
});

export default InputMolecule;
