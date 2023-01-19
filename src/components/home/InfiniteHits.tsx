import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connectInfiniteHits} from 'react-instantsearch-native';
import RecomendedCard from './RecomendedCard';

interface hitsProps {
  hits: Array<any>;
  hasMore: boolean;
  refineNext: () => {};
}

const HitsComponent = ({hits, hasMore, refineNext}: hitsProps) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        data={hits}
        contentContainerStyle={{padding: 20}}
        ItemSeparatorComponent={() => <View style={{margin: 10}} />}
        renderItem={({item, index}) => {
          console.log(item);
          return (
            <RecomendedCard
              name={item.name}
              desc={item.description}
              img={item.image}
              price={item.price}
            />
          );
        }}
      />
    </View>
  );
};

const InfiniteHits = connectInfiniteHits(HitsComponent);

export default InfiniteHits;

const styles = StyleSheet.create({});
