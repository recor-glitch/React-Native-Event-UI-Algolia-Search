import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBox(): JSX.Element {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        theme={{roundness: 20}}
        style={styles.textField}
        mode="outlined"
        left={<TextInput.Icon icon="magnify" size={25} iconColor="#777777" />}
        right={
          <TextInput.Icon
            icon="microphone"
            size={25}
            iconColor="rgba(0,0,255,0.5)"
          />
        }
        placeholder="Find Events"
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
        outlineColor="rgba(255, 255, 255, 0)"
        activeOutlineColor="rgba(0, 0, 255, 0.3)"
      />
      <View style={styles.searchMenu}>
        <Icon name="menu" size={25} color="rgba(0,0,255,0.5)" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 100
  },
  textField: {
    flex: 1,
  },
  searchMenu: {
    transform: [{translateY: 3}],
    flex: 0.2,
    height: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
});
