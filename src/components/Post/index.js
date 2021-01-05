import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          url: 'https://miro.medium.com/max/9838/1*DhaMxMCqz0eHkVOEpP6Bdw.jpeg',
        }}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type & description */}
      <Text style={styles.description} numberOfLines={2}>
        Entire flat. Puerto de la cruz lorem impsum lorem impsum lorem impsum
        lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem
        impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
        lorem impsum lorem impsum
      </Text>

      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.price}> $30</Text> / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
