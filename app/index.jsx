import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PostImage from "../assets/images/post-it.png";

const Index = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={PostImage} style={{ width: 200, height: 200 }} />
      <Text style={styles.mainTitle}>Welcome to Notes App.</Text>
      <Text style={styles.subTitle}>Capture anytime anywhere.</Text>
      <TouchableOpacity onPress={() => router.push("/notes")}>
        <Text style={{ color: "blue", marginTop: 20 }}>Get Started!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: "gray",
  },
});
