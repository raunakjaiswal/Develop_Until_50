import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../Screen/MainScreen';
import MatchesScreen from '../Screen/MatchesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator

            tabBarOptions={{
                showLabel: false,
                inactiveTintColor: '#a8a5a7',
                activeTintColor: '#f20a48',
            }}

        >
            <Tab.Screen name="Main" component={MainScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="fire" size={30} color={color} />
                    ),

                }}
            />
            <Tab.Screen name="Match" component={MatchesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="chatbubbles" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default BottomTabNavigator