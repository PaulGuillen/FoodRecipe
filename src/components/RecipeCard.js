import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.backgroundCard}>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
            style={styles.pressable}
          >
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <View style={styles.descriptionCard}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={styles.horizontalView}>
                <Text style={styles.textRating}>{item.rating}</Text>
                <FontAwesome name="star" style={styles.fontAwesomeStyle} />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  backgroundCard: {
    marginBottom: 30,
  },
  horizontalView: {
    flexDirection: "row",
  },
  pressable: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "center",
  },
  descriptionCard: {
    flexDirection: "row",
    marginTop: 8,
  },
  textRating: {
    marginRight: 8,
  },
  fontAwesomeStyle: {
    marginTop: 4,
    color: colors.COLOR_PRIMARY,
  },
});
