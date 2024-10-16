import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';

const DetailBike = ({ route }) => {
 const { detailBike } = route.params;
  const bikes = [
  {
    id: 1,
    newPrice: '15% OFF I 350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 2,
    newPrice: '15% OFF I 350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 3,
    newPrice: '15% OFF I 350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
    {
    id: 4,
    newPrice: '15% OFF I 350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
    {
    id: 5,
    newPrice: '15% OFF I 350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
    {
    id: 6,
    newPrice: '15% OFF I 350$',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
];

 const bike = bikes.find(b => b.id == detailBike.id);

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/bione-removebg-previewdetail.png')} style={styles.image} />
      
      <Text style={styles.title}>{detailBike.name}</Text>
      
      <View style={styles.priceRow}>
        <Text style={styles.newPrice}>{bike.newPrice}</Text>
        <Text style={styles.oldPrice}>449$</Text>
      </View>
      
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>{bike.description}</Text>
      
      <View style={styles.actionRow}>
        <Image source={require('../assets/akar-icons_heart.png')} />
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 24, 
    marginVertical: 10
  },
  priceRow: {
    flexDirection: 'row'
  },
  newPrice: {
    marginRight: 60, 
    color:'rgba(0, 0, 0, 0.59)', 
    marginBottom: 30
  },
  oldPrice: {
    textDecorationLine: 'line-through'
  },
  descriptionTitle: {
    marginVertical: 10, 
    fontWeight: 'bold'
  },
  descriptionText: {
    marginBottom: 10
  },
  actionRow: {
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems:'center', 
    marginVertical: 20
  },
  addToCartButton: {
    backgroundColor: 'red', 
    paddingHorizontal: 48, 
    paddingVertical: 8, 
    borderRadius: 18,
  },
  addToCartText: {
    color: 'white', 
    fontWeight: 'bold'
  }
});

export default DetailBike;