import React, {useState} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMapMarker from '../../components/CustomMapMarker/index';

import places from '../../../assets/data/feed';
import CarouselItem from '../../components/Post/CarouselItem';

const SearchResultsMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const width = useWindowDimensions().width;

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMapMarker
            key={place.id}
            coordinate={place.coordinate}
            price={place.price}
            isSelected={place.id === selectedPlace}
            onPress={() => setSelectedPlace(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 40}}>
        {/* <CarouselItem post={places[0]} /> */}
        <FlatList
          data={places}
          renderItem={({item}) => <CarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
