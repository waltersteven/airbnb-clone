import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, Pressable, useWindowDimensions} from 'react-native';
import styles from './styles';

const CarouselItem = ({post}) => {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{
            url: post.image,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Type & description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/* Price */}
          <Text style={styles.prices}>
            <Text style={styles.price}> ${post.price}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarouselItem;
