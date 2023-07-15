import React, { useEffect } from "react";
import { auth } from "../config/firebase";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../colors";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import ChatList from "../components/ChatList";
const avatar = "https://i.pravatar.cc/300";

const Home = () => {
  const { photoURL } = auth.currentUser;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color={colors.gray}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={{ uri: photoURL || avatar }}
            style={{
              borderRadius: 50,
              width: 40,
              height: 40,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          //   style={styles.chatButton}
          onPress={() => navigation.navigate("Chat")}
        >
          <ChatList />
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("AddChat")}
      >
        <Entypo name="chat" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  chatButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2b68e6",
    borderRadius: "50%",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
});
