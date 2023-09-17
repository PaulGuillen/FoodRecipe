import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { categories } from "../Constant";

const CategoriesFilter = ({ onSelectCategory }) => {
  const [localSelectedCategory, setLocalSelectedCategory] = useState(null);

  const handleCategoryPress = (categoryType) => {
    if (localSelectedCategory === categoryType) {
      // Si ya está seleccionada, deseleccionarla
      setLocalSelectedCategory(null);
      onSelectCategory(null); // También deselecciona en el componente padre
    } else {
      // Si no está seleccionada, seleccionarla
      setLocalSelectedCategory(categoryType);
      onSelectCategory(categoryType); // También selecciona en el componente padre
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              localSelectedCategory === category.type &&
                styles.selectedCategory,
            ]}
            onPress={() => handleCategoryPress(category.type)}
          >
            <Text style={styles.textButton}>{category.category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 4,
  },
  selectedCategory: {
    backgroundColor: "#f96163",
    borderColor: "#f96163",
  },
  textButton: {
    fontSize: 18,
  },
});

export default CategoriesFilter;
