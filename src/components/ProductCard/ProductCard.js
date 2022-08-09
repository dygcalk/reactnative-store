import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.productContainer}>
      <Image style={styles.productImg} source={{uri: product.imgURL}} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      {!product.inStock && <Text style={styles.productStock}> Stokta Yok</Text>}
    </View>
  );
};

export default ProductCard;
