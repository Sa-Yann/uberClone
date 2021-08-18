import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const NavFavorites = () => {

    const dataInfo = [
        {
            id: '123',
            icon: 'home',
            location: 'home',
            destination: "Code Street, London, UK",
        },
        {
            id: '456',
            icon: 'briefcase',
            location: 'Work',
            destination: "CLondon Eye, London, UK",
        },
    ]
    return (
        <FlatList
            data={dataInfo}
            keyExtractor={(itemsInData) => itemsInData.id}
            itemSeparatedComponent={() => (
                <View
                    style={[tw`bg-gray-200`, { height:0.5 }]}
                />
            )}
            //with renderItem alway have the variable in (beiing called : item )
            renderItem={({item: { location, destination, icon }}) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    {/* <Text>I m here NavFav</Text> */}
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
