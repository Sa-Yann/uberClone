import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../sliceReducer/navSliceRdcr';
import { useNavigation } from '@react-navigation/core';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const NavigateCard = () => {

    const dispatch =  useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            {/* py-5 is vertival padding of 5px */}
            <Text style={tw`text-center py-5 text-xl`}>Choose your Destination</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={inputBoxStyle}
                        placeholder="Destination?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        query={{        
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                        enablePoweredByContainer={false}
                        returnKeyType={"search"}
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            console.log("🚀 ~ file: NavigateCard.js ~ line 51 ~ NavigateCard ~ details", details)
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            navigation.navigate('RideOptionsCard');
                        }}
                    />

                </View>
            <NavFavorites/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity 
                    style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
                    onPress={() => navigation.navigate("RideOptionsCard")}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16}/>
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row bg-gray-100 w-24 px-4 py-3 rounded-full justify-between`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                    <Text style={tw`text-black text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const inputBoxStyle = StyleSheet.create({
    container: {

        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
