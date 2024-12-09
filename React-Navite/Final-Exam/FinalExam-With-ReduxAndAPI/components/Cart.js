import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, saveCart } from '../store';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);

  const handleSaveCart = () => {
    if (cart.length === 0) {
      Alert.alert('Giỏ hàng trống!', 'Vui lòng thêm sản phẩm trước khi lưu.');
    } else {
      dispatch(saveCart(cart));
      Alert.alert('Thành công!', 'Giỏ hàng đã được lưu.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng</Text>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Giỏ hàng trống!</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => dispatch(removeFromCart(item.id))}
                >
                  <Text style={styles.deleteText}>Xóa</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Button title="Lưu Giỏ Hàng" onPress={handleSaveCart} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  empty: { fontSize: 18, color: '#555', textAlign: 'center', marginTop: 20 },
  product: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: { fontSize: 18, fontWeight: '600' },
  productPrice: { fontSize: 16, color: '#555' },
  deleteButton: {
    backgroundColor: '#ff5555',
    padding: 8,
    borderRadius: 8,
  },
  deleteText: { color: '#fff', fontWeight: 'bold' },
});

export default Cart;
