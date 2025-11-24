import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersListScreen from '../screens/CharactersListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1c1c1c' },
        headerTintColor: '#00ff9d',
      }}
    >
      <Stack.Screen name="Characters" component={CharactersListScreen} options={{ title: 'Rick & Morty' }} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}
