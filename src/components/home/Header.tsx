import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.header}>Find amazing events</Text>
          <Text style={styles.subtitle}>Search in 768 events around!</Text>
        </View>
        <View style={styles.avatar}>
          <ImageBackground
            style={{height: height * 0.1, width: height * 0.1}}
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    height: height * 0.1,
    width: height * 0.1,
    borderRadius: height * 0.05,
    overflow: 'hidden',
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ededed',
  },
});
