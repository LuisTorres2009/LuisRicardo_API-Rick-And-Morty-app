import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function CharacterCard({ character, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.info}>{character.status} - {character.species}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10, backgroundColor: colors.card, borderRadius: 8, padding: 10 },
  image: { width: 80, height: 80, borderRadius: 40, marginRight: 10 },
  name: { fontWeight: 'bold', fontSize: 16, color: colors.textPrimary },
  info: { color: colors.textSecondary }
});
