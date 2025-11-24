import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function SearchBar({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar personagem..."
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { backgroundColor: colors.card, color: colors.textSecondary, padding: 10, borderRadius: 8 }
});
