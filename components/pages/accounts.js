import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Accounts = () => {
    return (
        <View>
            <Text>Account Screen</Text>
        </View>
    )
}

export default Accounts

const styles = StyleSheet.create({})
