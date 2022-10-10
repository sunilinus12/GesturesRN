import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Test from './components/Test';
import Test2 from './components/Test2';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <View
        style={{
          flex: 0.5,
          backgroundColor: 'yellow',
        }}></View> */}
      {/* <Test /> */}
      <Test2 />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
