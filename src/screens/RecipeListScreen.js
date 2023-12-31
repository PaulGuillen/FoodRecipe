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

  const filteredRecipes = recipeList.filter((recipe) => {
    if (searchText && !recipe.name.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
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

      <View style={styles.categoryFilterView}>
        <Text style={styles.subTitleTextView}>Categorias</Text>
        <CategoriesFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
      </View>

      <View style={styles.recipeCardView}>
        <Text style={styles.subTitleTextView}>Recetas</Text>
        <RecipeCard
          searchText={searchText}
          filteredRecipes={filteredRecipes}
          selectedCategory={selectedCategory}
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
  categoryFilterView: {
    marginTop: 20,
  },
  recipeCardView: {
    flex: 1,
    marginTop: 20,
  },
  subTitleTextView: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default RecipeListScreen;
