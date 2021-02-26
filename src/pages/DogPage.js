import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, Image, Dimensions} from 'react-native'
import axios from 'axios'
import { globalStyles } from '../../style/globalStyle';
import PlainText from '../components/PlainText';

const DogPage=({navigation})=>{
    const [images, setImage]=useState([]);
    const [des, setDes]=useState();
    const {width, height}=Dimensions.get('window');
    useEffect(()=>{
        const databreed=navigation.getParam('breed');
        axios.get(`https://dog.ceo/api/breed/${databreed}/images`).then(({data})=>{
            setImage(data.message)
        });

        axios.get(`https://en.wikipedia.org/w/api.php?format=json&explaintext&prop=extracts&explaintext&exintro&action=query&list=search&srsearch=${databreed}%20dog`).then(({data})=>{
            setDes(data.query.search[0].snippet);
        });
    }, [])
   
    return(
        <View style={{ flex:1 }}>
            <View style={{ flex:1 }}>
            <FlatList 
                keyExtractor={(item, index)=> {
                    return 'dog-'+index
                }}
                snapToInterval={width}
                setHorizontalScrollIndicator={false}
                horizontal={true}
                data={images}
                renderItem={({item})=>{
                    return(
                        <View style={{ margin:10 }}>
                            <Image source={{ uri:item }} style={{ width: width-20, height: height *0.3 }} />
                        </View>
                    )
                }}
            />
            </View>
            {/* text */}
            <View style={{ flex:1, padding: 10 }}>
                <PlainText text={des} />
            </View>
        </View>
    )
}

export default DogPage