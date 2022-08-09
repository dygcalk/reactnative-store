import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  productContainer: {
    width: '48%',
    backgroundColor: 'lightgrey',
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
  },
  productImg: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    width: '100%',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {},
  productStock: {
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
