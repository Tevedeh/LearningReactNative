import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };

    //This method is auto called when the component is about to be mounted
    componentWillMount() {
        console.log('componentWillMount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            //setState re renders!
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
