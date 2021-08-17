import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GOOGLE_MAPS_APIKEY } from '@env';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}> 
            {/* <Text style={tw`text-green-500`}> I am the Homescreen</Text> */}
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height:100, resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where From?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    // searching for differents places
                    nearbyPlacesAPI="googlePlacesSearch"
                    // start searching 400ms after I stop typing
                    debounce={400}
                />

                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
