import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const items = [
  {
    icon: 'search',
    name: 'All',
  },
  {
    icon: 'library-music',
    name: 'Music',
  },
  {
    icon: 'sports-cricket',
    name: 'Sports',
  },
  {
    icon: 'self-improvement',
    name: 'Yoga',
  },
  {
    icon: 'fitness-center',
    name: 'Gym',
  },
  {
    icon: 'filter-hdr',
    name: 'Fair',
  },
];

interface categoryProps {
  name: string;
  icon: string;
}

const CategoryCard = (props: categoryProps): JSX.Element => {
  return (
    <View>
      <View style={styles.categoryContainer}>
        <Icon name={props.icon} size={25} color="#ededed" />
      </View>
      <View style={{padding: 3}} />
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const CategoriesList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 20}}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        data={items}
        horizontal
        ItemSeparatorComponent={() => <View style={{padding: 10}} />}
        renderItem={({item}) => (
          <CategoryCard icon={item.icon} name={item.name} />
        )}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {},
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(119,170,255, 0.8)',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#c0c2ce',
    textAlign: 'center',
  },
});
