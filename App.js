import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CardPage from './src/components/pages/CardsPage';
const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ScrollView>
       <CardPage />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
