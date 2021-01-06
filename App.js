/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// import HomeScreen from './src/screens/Home/index';
// import SearchResultsScreen from './src/screens/SearchResults/index';
import DestinationSearchScreen from './src/screens/DestinationSearch/index';
import Post from './src/components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearchScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
