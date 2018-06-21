//Import a library

//React knows how a component should behave
//Knows how to take a bunch of components and make them work
import React from 'react';

//Knows how to take the output from component and put it on the phone
//Provides default core components
import { AppRegistry, View } from 'react-native';

//The header we made
import Header from './src/components/Header';

//AlbumList we made
import AlbumList from './src/components/AlbumList';

//Create a component

const App = () => {
    return (
        //Tag with no text inside is self closing
        //So dont use <Header></Header> use <Header />
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums!'} />
            <AlbumList />
        </View>
    );
};

/**
 * The "error" above is not going to cause the app to fail,
 * I could fix it with
 * 
 * const App = () => (
 *    <Text>Some Text</Text>
 * );
 * 
 */

//Render it to the device

AppRegistry.registerComponent('albums', () => App);
