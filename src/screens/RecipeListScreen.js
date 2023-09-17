import { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { recipeList } from "../Constant.js";

const RecipeListScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtra las recetas según la categoría seleccionada
  const filteredRecipes = recipeList.filter((recipe) => {
    // Filtra por texto de búsqueda
    if (
      searchText &&
      !recipe.name.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false;
    }
    // Filtra por categoría
    if (selectedCategory && recipe.type !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header headerText={"Hoy es "} headerIcon={"bitbucket"} />

      <SearchFilter
        icon="search"
        placeholder={"Busca la receta..."}
        onChangeText={handleSearchTextChange}
      />

      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categorias</Text>
        <CategoriesFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recetas</Text>
        <RecipeCard
          searchText={searchText}
          filteredRecipes={filteredRecipes}
          selectedCategory={selectedCategory} // Pasa la selectedCategory como prop
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 60,
  },
});

export default RecipeListScreen;
