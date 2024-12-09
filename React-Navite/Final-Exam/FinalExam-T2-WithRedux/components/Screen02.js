import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {setCategory, setFilter, toggleShowAll} from '../store';

const Screen02 = () => {
  const dispatch = useDispatch();
  const {categories, selectedCategory, filter, products, showAll} = useSelector((state) => state.products);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory && (showAll || product.filter === filter)
  );

  return (
    <View style={styles.container}>
      {/* Categories */}
      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.category, selectedCategory === category && styles.selectedCategory]}
            onPress={() => dispatch(setCategory(category))}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        {['Best Sales', 'Best Matched', 'Popular'].map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filter, filter === f && styles.selectedFilter]}
            onPress={() => dispatch(setFilter(f))}
          >
            <Text style={styles.filterText}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />

      {/* See All Button */}
      <TouchableOpacity style={styles.seeAllButton} onPress={() => dispatch(toggleShowAll())}>
        <Text style={styles.seeAllText}>{showAll ? 'Hide All' : 'See All'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  categories: {flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10},
  category: {padding: 10, borderWidth: 1, borderRadius: 5},
  selectedCategory: {backgroundColor: 'lightblue'},
  categoryText: {fontWeight: 'bold'},
  filters: {flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10},
  filter: {padding: 5},
  selectedFilter: {borderBottomWidth: 2, borderBottomColor: 'blue'},
  filterText: {fontSize: 16},
  product: {padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd'},
  seeAllButton: {alignItems: 'center', padding: 10, backgroundColor: 'lightgray', borderRadius: 5, marginTop: 10},
  seeAllText: {fontWeight: 'bold'},
});

export default Screen02;
