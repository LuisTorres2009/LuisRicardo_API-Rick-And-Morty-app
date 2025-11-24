import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import api from '../services/api';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';

export default function CharactersListScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const fetchCharacters = async (pageNum = 1, searchTerm = '') => {
    try {
      setLoading(true);
      const response = await api.get(`/character?page=${pageNum}&name=${searchTerm}`);
      if (pageNum === 1) {
        setCharacters(response.data.results);
      } else {
        setCharacters(prev => [...prev, ...response.data.results]);
      }
      setHasMore(!!response.data.info.next);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(1, search);
  }, [search]);

  const loadMore = () => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCharacters(nextPage, search);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1c1c1c' }}>
      <SearchBar value={search} onChange={setSearch} />
      {loading && characters.length === 0 ? (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <CharacterCard
              character={item}
              onPress={() => navigation.navigate('CharacterDetail', { id: item.id })}
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
        />
      )}
    </View>
  );
}
