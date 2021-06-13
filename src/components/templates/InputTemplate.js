import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import InputOrganism from '../UI/organisms/InputOrganism';
import ButtonAtom from '../UI/atoms/ButtonAtom';
const InputTemplate = () => {
  return (
    <SafeAreaView>
     <InputOrganism />
     <InputOrganism />
     <ButtonAtom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    
});

export default InputTemplate;
