import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector, useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin, setTravelTimeInfos } from '../sliceReducer/navSliceRdcr';
import { GOOGLE_MAPS_APIKEY } from '@env';

const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination)
    const mapReference = useRef(null)

    const dispatch = useDispatch()

    useEffect(( ) => {
        if(!origin || !destination ) return; // if no origin and/or no  destination no action
        //Zoom and fit to the markers
        mapReference.current.fitToSuppliedMarkers(['origin', 'destination'],{
            // edgePadding: 25,
            edgePadding: { top: 50, right: 50, left: 70, bottom: 50},
        })
    }, [origin, destination, mapReference])
    // re rendering the page if orgin, destination or mapReference evolve


    useEffect(() => {
        if(!origin || !destination ) return;

        const getTravelTime = async() => {
            const URL = fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
            .then((res) => res.json())
            .then(data => {
                // console.log("🚀 ~ file: Map.js ~ line 35 ~ getTravelTime ~ data", data);
                // dispatching the travel time from data
                dispatch(setTravelTimeInfos(data.rows[0].elements[0]));
            })
        };

        getTravelTime();
    }
        
    ),[origin, destination, GOOGLE_MAPS_APIKEY]

    return (
        <MapView
        //ef={mapReference} to attache the useRef to the MapView Component
        ref={mapReference}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
          {origin && destination && (
              <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
              />
          )}
          {origin?.location && (
              <Marker
                coordinate={{
                  latitude: origin.location.lat,
                  longitude: origin.location.lng,
                }}
                title="Departure"
                description={origin.description}
                identifier="origin"
              />
          )}
          {destination?.location && (
              <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              title="Destination"
              description={destination.description}
              identifier="destination"
              />
          )}
      </MapView>
    
    )
}

export default Map

const styles = StyleSheet.create({})
