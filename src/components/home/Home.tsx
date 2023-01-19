import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBox from './SearchBox';
import Header from './Header';
import CategoriesList from './CategoriesList';
import Content from './Content';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import algoliasearch from 'algoliasearch';
import {InstantSearch} from 'react-instantsearch-native';
import InfiniteHits from './InfiniteHits';

const client = algoliasearch('WWLNPKWSGH', 'daff26e80e7e0e564943e1d8e033f63f');

export default function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <InstantSearch searchClient={client} indexName="demo">
      <SafeAreaView style={backgroundStyle}>
        <StatusBar hidden />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <View style={styles.container}>
              <View style={styles.main}>
                <LinearGradient
                  colors={[
                    '#EDEDED',
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 0, 255, 0.5)',
                  ]}
                  start={{x: 0, y: 0}}>
                  <View>
                    <Header />
                    <SearchBox />
                  </View>
                </LinearGradient>
              </View>
              <View style={{transform: [{translateY: -35}], flex: 1}}>
                <CategoriesList />
              </View>
              <Content />
              <InfiniteHits />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </InstantSearch>
  );
}

const styles = StyleSheet.create({
  main: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  container: {},
});
