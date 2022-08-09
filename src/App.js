import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ProductCard from './components/ProductCard/ProductCard';

import productdata from './product-data.json';

const App = () => {
  const renderItems = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.header}>Patika Store</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Ara..."
                placeholderTextColor="grey"
              />
            </View>
          )}
          style={styles.container}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={productdata}
          renderItem={renderItems}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'purple',
  },
  searchInput: {
    height: 50,
    marginBottom: 12,
    padding: 15,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    fontSize: 18,
  },
});

export default App;
