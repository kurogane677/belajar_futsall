import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Schedule = () => {
    return (
        <View>
            <Text>Schedule Screen</Text>
        </View>
    )
}

export default Schedule

const styles = StyleSheet.create({})
