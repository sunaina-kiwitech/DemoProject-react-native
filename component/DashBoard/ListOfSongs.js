import React from 'react';
import {
    View,
    Text
} from 'react-native';

const los = [{
    name: 'Shape of you',
    artist: 'ED Sheeran'
},
{
    name: 'Closer',
    artist: 'The Chainsmokers'
},
{
    name: 'Despacito',
    artist: 'Luis Fonsi feat. Daddy Yankee'
},
{
    name: 'Something Just Like This',
    artist: 'The Chainsmokers & Coldplay	'
},
{
    name: 'I Don’t Wanna Live Forever',
    artist: 'Taylor Swift	'
},
{
    name: 'Bom Bidi Bom',
    artist: 'Nicki Minaj'
},
{
    name: 'Bad Liar',
    artist: 'Selena Gomez	'
},
{
    name: 'No Frauds',
    artist: 'Nicki Minaj, Drake, Lil Wayne'
},
{
    name: 'Miss You More',
    artist: 'Katy Perry'
},
{
    name: 'Swish Swish',
    artist: 'Katy Perry Ft Nicki Minaj'
},
{
    name: 'Save Myself',
    artist: 'Ed Sheeran'
},
{
    name: 'Beauty and the Beast',
    artist: 'Ariana Grande'
},
{
    name: 'Roulette',
    artist: 'Katy Perry'
},{
    name: 'Swish Swish',
    artist: 'Katy Perry Ft Nicki Minaj'
},
{
    name: 'Chained To The Rhythm',
    artist: 'Katy Perry ft. Skip Marley'
},
]


const ListOfSongs = () => {
    return (
        <View >
            <Text style={{
                color: 'steelblue',
                fontSize: 40,
                textAlign: 'center',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
            }}>
                POP SONGS
            </Text>
            {
                los.map((song, index) => {
                    return <View style ={{
                        flexflow:'column wrap',
                    }}>
                        <Text key={index} style={{
                            color: 'grey',
                            fontSize: 20,
                            padding: 6,
                        }}>
                           {index +1} . {song.name} -  {song.artist}
                        </Text>
                    </View>
                })
            }
        </View>
    );
};

export default ListOfSongs;
