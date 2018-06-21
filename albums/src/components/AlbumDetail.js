import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { 
        title, 
        artist, 
        thumbnail_image,
        image,
        url
    } = album;

    const { 
        textStyle, 
        imageStyle,
        imageContainerStyle,
        textFont,
        albumArtStyle
    } = styles;

    return (
        <Card>
            <CardItem>
                <View style={imageContainerStyle}>
                    <Image 
                        style={imageStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={textStyle}>
                    <Text style={textFont}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>

            <CardItem>
                <Image 
                    style={albumArtStyle}
                    source={{ uri: image }}
                />
            </CardItem>

            <CardItem>
                <Button onPress={() => Linking.openURL(url)}>
                Buy Now
                </Button>
            </CardItem>
        </Card>
    );
};

const styles = {
    textStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textFont: {
        fontSize: 18
    },
    imageStyle: {
        height: 50,
        width: 50
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumArtStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
