import {
  Alert,
  Animated,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;
export default function Test() {
  const touch = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const dimensions = useWindowDimensions();
  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      Alert.alert('Single tap!');
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      Alert.alert('Double tap!');
    });
  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      Alert.alert(`Long pressed for ${e.duration} ms!`);
    }
  });

  return (
    <GestureDetector gesture={longPressGesture}>
      <View style={styles.box} />
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  box: {
    width: 100,
    height: 100,
    // borderRadius: 50,
    backgroundColor: 'red',
  },
});
