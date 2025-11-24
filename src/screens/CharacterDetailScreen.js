import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import api from '../services/api';
import colors from '../theme/colors';

export default function CharacterDetailScreen({ route }) {
  const { id } = route.params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    api.get(`/character/${id}`)
      .then(response => setCharacter(response.data));
  }, [id]);

  if (!character) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Status: {character.status}</Text>
      <Text style={styles.info}>Espécie: {character.species}</Text>
      <Text style={styles.info}>Gênero: {character.gender}</Text>
      <Text style={styles.info}>Origem: {character.origin.name}</Text>
      <Text style={styles.info}>Localização Atual: {character.location.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: colors.background },
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', color: colors.textPrimary, marginBottom: 10 },
  info: { color: colors.textSecondary, fontSize: 16 }
});
