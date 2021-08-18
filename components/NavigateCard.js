import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../sliceReducer/navSliceRdcr';
import { useNavigation } from '@react-navigation/core';
import NavFavorites from './NavFavorites';

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
