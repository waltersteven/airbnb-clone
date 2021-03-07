import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './styles';

const DetailedPost = ({post}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{
            url: post.image,
          }}
        />
        {/* Bed & Bedroom */}
        <Text style={styles.bedrooms}>
          {post.bed} bed {post.bedroom} bedroom
        </Text>

        {/* Type & description */}
        <Text style={styles.description} numberOfLines={2}>
          {post.type}. {post.title}
        </Text>

        {/* Old price & new price */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice} </Text>
          <Text style={styles.price}> ${post.price}</Text> / night
        </Text>

        {/* Total price */}
        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
