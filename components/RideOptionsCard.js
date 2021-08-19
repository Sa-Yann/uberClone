import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectTravelTimeInfos } from '../sliceReducer/navSliceRdcr';




const RideOptionsCard = () => {

    const dataUberCarTypes = [
        {
            id: "Uber-X-123",
            title: "Uber X",
            multiplier: 1,
            image: "https://links.papareact.com/3pn"
        },
        {
            id: "Uber-X-456",
            title: "Uber XL",
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8"
        },
        {
            id: "Uber-X-789",
            title: "Uber LUX",
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf"
        },
    ]

    const navigation = useNavigation();

    const [selected, setSelected] = useState();

    const travelTimeInformation = useSelector(selectTravelTimeInfos);

    const SURGE_CHARGE_RATE = 1.5;

    return (
        <SafeAreaView style={ tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>
                    Select a Ride - {travelTimeInformation?.distance?.text}
                </Text>
            </View>
            <FlatList
                data={dataUberCarTypes}
                keyExtractor={ (item)=> item.id}
                renderItem={({item:{id, title, multiplier, image}, item}) => (
                    <TouchableOpacity 
                    onPress={() => setSelected(item)}
                    style={
                        tw`flex-row justify-between items-center px-10
                        ${id === selected?.id && 'bg-gray-200'}`
                    
                    }>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode:"contain"
                            }}
                            source= {
                                {uri: image}
                                //not item.image cause we distructor item in the argument of the function it s contained
                            }
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                            <Text>Duration:{' '}{travelTimeInformation?.duration?.text}</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'EUR',
                            }).format(
                                (travelTimeInformation?.duration?.value
                                    * SURGE_CHARGE_RATE 
                                    * multiplier) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}

            
            />
            {/* <View style={tw`mt-auto border-t border-gray-200`}> */}
            <View>
                <TouchableOpacity 
                disabled={!selected}
                style={tw`bg-black ${!selected && "bg-gray-300"}`}
                >
                    <Text style={tw`text-center text-white text-xl px-3 m-3 ${!selected && "bg-gray-300 text-gray-300"}`}>Choosen Car:{' '}{selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default RideOptionsCard

const styles = StyleSheet.create({})
