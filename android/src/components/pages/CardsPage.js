import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import InputTemplate from '../templates/InputTemplate';
const CardPage = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.cardcontainer}>
         <InputTemplate />
     </View>
     <View style={styles.cardcontainer}>
         <InputTemplate />
     </View>
     <View style={styles.cardcontainer}>
         <InputTemplate />
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    cardcontainer:{
        width: 300,
        height: 200,
        flex: 1,
    }
});

export default CardPage;
