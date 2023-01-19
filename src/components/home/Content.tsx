import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Content = (): JSX.Element => {
  return (
    <View style={styles.main}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.header}>Recomended events</Text>
        <View style={styles.rightText}>
          <Icon name="location-on" size={25} />
          <Text style={{fontSize: 16, fontWeight: '400'}}>NY</Text>
          <Icon name="keyboard-arrow-down" size={25} />
        </View>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  HeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4d4d43',
  },
  rightText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
