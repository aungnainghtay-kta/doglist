import React, {useState} from 'react'
import {View, Text, Image, FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../../style/globalStyle'
import axios from 'axios'

//style

const HomePage=({navigation})=>{
    const [breeds, setBreeds]=useState({});

    axios.get('https://dog.ceo/api/breeds/list/all').then(({data})=>{
        const breedsObject=data.message;
        const breedKey=Object.keys(breedsObject)
        const assembledBreedObject={}

        breedKey.map(key=>{
            if(breedsObject[key].length >0 ){
                breedsObject[key].forEach(subBreed=>{
                    assembledBreedObject[key+'_'+subBreed]=key+'/'+subBreed;
                })
            }else{
                assembledBreedObject[key]=key;
            }
        })
        setBreeds(assembledBreedObject)
    })
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.iconContainer}>
                <Image style={globalStyles.icon} source={require('../../assets/images/icon.png')} />
            </View>
            <View style={globalStyles.listContainer}>
                <FlatList
                    keyExtractor={(item, index)=> {
                        return 'img-'+index
                    }}
                    data={Object.keys(breeds)}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity style={globalStyles.touchable} onPress={()=>{
                                navigation.navigate('DogPage', {breed: breeds[item]});
                            }}>
                                <Text style={globalStyles.title}>{breeds[item]}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default HomePage