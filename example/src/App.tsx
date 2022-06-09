import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import HyperTrack from 'react-native-hypertrack-sdk';

export default function App() {
  const getID = async () => {
    try {
      const id = await HyperTrack.getDeviceID();
      console.log('DeviceID', id);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getID();
    const a = HyperTrack.onIncrementIncreasedChanged((data) => {
      console.log('onIncrement received', data);
    });
    const b = HyperTrack.onIncrementDecreasedChanged((data) => {
      console.log('onDecrement received', data);
    });

    return () => {
      a.remove();
      b.remove();
    };
  }, []);

  const increase = async () => {
    try {
      const response = await HyperTrack.increase();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const decrease = async () => {
    try {
      const response = await HyperTrack.decrease();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const startTracking = async () => {
    try {
      const response = await HyperTrack.startTracking();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const stopTracking = async () => {
    try {
      const response = await HyperTrack.stopTracking();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    try {
      const response = await HyperTrack.getLocation();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const isTracking = async () => {
    try {
      const response = await HyperTrack.isTracking();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const isRunning = async () => {
    try {
      const response = await HyperTrack.isRunning();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const availability = async () => {
    try {
      const response = await HyperTrack.isAvailable();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const setDeviceName = async () => {
    try {
      const response = await HyperTrack.setDeviceName('My Device 1');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
      <Button title="Start" onPress={startTracking} />
      <Button title="Stop" onPress={stopTracking} />
      <Button title="getlocation" onPress={getLocation} />
      <Button title="isTracking" onPress={isTracking} />
      <Button title="isRunning" onPress={isRunning} />
      <Button title="availability" onPress={availability} />
      <Button title="device name" onPress={setDeviceName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
