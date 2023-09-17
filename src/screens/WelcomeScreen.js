import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require("../../assets/images/welcome1.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Recetario de cocina</Text>

        <Text style={styles.subttile}>Cocina como un experto</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("RecipeList")}
          style={styles.roundedButton}
        >
          <Text style={styles.textRoundedButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    alignItems: "center",
  },
  image: {
    marginTop: 30,
  },
  title: {
    color: "#f96163",
    fontSize: 32,
    fontWeight: "bold",
  },
  subttile: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3c444c",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  roundedButton: {
    backgroundColor: "#f96163",
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  textRoundedButton: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
});
