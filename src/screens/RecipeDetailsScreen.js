import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  console.log(item);
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={styles.safeAreaView}>
        <Pressable
          style={styles.pressableView}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
        <FontAwesome name={"heart-o"} size={28} color="white" />
      </SafeAreaView>
      <View style={styles.viewBackgroundBack}>
        <View style={styles.imageViewSize}>
          <Image source={item.image} style={styles.imageStyle} />
        </View>
        <Text style={styles.titleStyle}>{item.name}</Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.descriptionStyle}>{item.description} </Text>
            <View style={styles.horizontalViewRow}>
              <View style={styles.containerRoundedTimer}>
                <Text style={styles.textIcon}>⏰</Text>
                <Text style={styles.descriptionTextIcon}>{item.time}</Text>
              </View>
              <View style={styles.containerRoundedLevel}>
                <Text style={styles.textIcon}>🥣</Text>
                <Text style={styles.descriptionTextIcon}>
                  {item.difficulty}
                </Text>
              </View>
              <View style={styles.containerRoundedCalories}>
                <Text style={styles.textIcon}>🔥</Text>
                <Text style={styles.descriptionTextIcon}>{item.calories}</Text>
              </View>
            </View>
            <View style={styles.viewIngredientesStyles}>
              <Text style={styles.textTitle}> Ingredientes: </Text>
              {item.ingredients.map((ingredient, index) => {
                return (
                  <View style={styles.listDescriptionIngredientes} key={index}>
                    <View style={styles.viewIconlistDescriptionIng}></View>
                    <Text style={styles.textIconListDescription}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.viewIngredientesStyles}>
              <Text style={styles.textTitle}> Pasos: </Text>
              {item.steps.map((step, index) => {
                return (
                  <Text key={index} style={styles.descriptionSteps}>{`${
                    index + 1
                  } ) ${step}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 60,
  },
  pressableView: {
    flex: 1,
  },
  viewBackgroundBack: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 140,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  imageViewSize: {
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  titleStyle: {
    marginTop: 120,
    fontSize: 28,
    fontWeight: "bold",
  },
  descriptionStyle: {
    fontSize: 20,
    marginVertical: 16,
    width: "100%",
    textAlign: "center",
  },
  horizontalViewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerRoundedTimer: {
    backgroundColor: "rgba(255, 0, 0, 0.38)",
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: "center",
    width: 100,
  },
  textIcon: {
    alignItems: "center",
    fontSize: 40,
  },
  descriptionTextIcon: {
    alignItems: "center",
    fontSize: 16,
    marginTop: 10,
    width: undefined,
  },
  containerRoundedLevel: {
    backgroundColor: "rgba(135, 206, 235, 0.8)",
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: "center",
    width: 100,
  },
  containerRoundedCalories: {
    backgroundColor: "rgba(255, 165, 0, 0.48)",
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: "center",
    width: 100,
  },
  viewIngredientesStyles: {
    alignSelf: "flex-start",
    marginVertical: 16,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },
  listDescriptionIngredientes: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  viewIconlistDescriptionIng: {
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  textIconListDescription: {
    fontSize: 16,
    marginLeft: 6,
  },
  descriptionSteps: {
    fontSize: 18,
    marginLeft: 6,
    marginVertical: 6,
  },
});
