# 📱 Rick and Morty App

Aplicativo mobile desenvolvido em **React Native com Expo**, que consome a [Rick and Morty API](https://rickandmortyapi.com/documentation/) para listar personagens e exibir seus detalhes.  
O projeto foi construído com foco em **consumo de API REST, gerenciamento de estado e navegação entre telas**.

---

## 🚀 Funcionalidades

- Listagem de personagens com imagem, nome, status e espécie.
- Tela de detalhes com informações completas: imagem, nome, status, espécie, gênero, origem e localização atual.
- Navegação entre telas utilizando `react-navigation` com Stack Navigator.
- Paginação infinita: carrega mais personagens ao rolar a lista.
- Busca/filtro: pesquisa personagens pelo nome em tempo real.
- Estilização temática inspirada na série Rick and Morty.

---

## 📂 Estrutura de Pastas

rick-and-morty-app/
│── App.js
│── babel.config.js
│── package.json
│── assets/
│   ├── icon.png
│   ├── splash-icon.png
│   ├── adaptive-icon.png
│   └── favicon.png
│── src/
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── services/
│   │   └── api.js
│   ├── components/
│   │   ├── CharacterCard.js
│   │   └── SearchBar.js
│   ├── screens/
│   │   ├── CharactersListScreen.js
│   │   └── CharacterDetailScreen.js
│   └── theme/
│       └── colors.js

---

## ⚙️ Tecnologias Utilizadas

- Expo
- React Native
- React Navigation
- Axios
- Rick and Morty API

---

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/LuisTorres2009/LuisRicardo_API-Rick-And-Morty-app
   cd rick-and-morty-app

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npx expo start
   ```
4. Abra no **Expo Go** (Android/iOS) ou em emulador.

---

## 🖼️ Telas

- CharactersListScreen: lista de personagens com busca e scroll infinito.
- CharacterDetailScreen: detalhes completos de um personagem selecionado.

---

## ✨ Desafios Extras Implementados

- Paginação infinita com `onEndReached` no `FlatList`.
- Busca em tempo real com `TextInput` filtrando personagens via API.
- Estilização temática com cores e estilo inspirados em Rick and Morty.

---

## 📖 Documentação Útil

- Rick and Morty API
- React Native FlatList
- React Navigation

---

## 👨‍💻 Autor

Projeto desenvolvido por **Luis** como parte da atividade de desenvolvimento mobile.

---
