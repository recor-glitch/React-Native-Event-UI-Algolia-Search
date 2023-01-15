import {StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBox from './SearchBox';
import Header from './Header';
import CategoriesList from './CategoriesList';
import Content from './Content';
import RecomendedCard from './RecomendedCard';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <LinearGradient
          colors={['#EDEDED', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 0.5)']}
          start={{x: 0, y: 0}}>
          <View>
            <Header />
            <SearchBox />
          </View>
        </LinearGradient>
      </View>
      <View style={{transform: [{translateY: -35}]}}>
        <CategoriesList />
      </View>
      <View>
        <Content />
      </View>
      {[...new Array(5)].map(item => <RecomendedCard />)}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  container: {},
});
