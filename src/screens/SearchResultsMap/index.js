import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMapMarker from '../../components/CustomMapMarker/index';

import places from '../../../assets/data/feed';
import CarouselItem from '../../components/Post/CarouselItem';

const SearchResultsMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const width = useWindowDimensions().width;

  const flatList = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedItem = viewableItems[0].item;
      setSelectedPlace(selectedItem.id);
    }
  });

  useEffect(() => {
    if (!selectedPlace || !flatList) {
      return;
    }

    const index = places.findIndex((place) => place.id === selectedPlace);
    flatList.current.scrollToIndex({index});

    const selectedItem = places[index];
    const region = {
      latitude: selectedItem.coordinate.latitude,
      longitude: selectedItem.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };

    map.current.animateToRegion(region);
  }, [selectedPlace]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
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
          ref={flatList}
          data={places}
          renderItem={({item}) => <CarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
