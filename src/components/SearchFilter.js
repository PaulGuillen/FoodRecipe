import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <FontAwesome name={icon} size={20} style={styles.icon} />
        <TextInput style={styles.inputText} placeholder={placeholder} />
      </View>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
  },
  icon: {
    padding: 20,
  },
  inputText: {
    flex: 1,
    fontSize: 18,
    height: 40,
  },
});
