import React, { useState, useEffect, useLayoutEffect } from "react";
import { auth } from "../config/firebase";
import { Avatar } from "@rneui/themed";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import ImagePicker from "react-native-image-picker";
const backImage = require("../assets/backImage.png");

const Profile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [avatar, setAvatar] = useState(user?.photoURL || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={onSignOut}
        >
          <AntDesign
            name="logout"
            size={24}
            color={colors.gray}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleImagePick = async () => {
    ImagePicker.launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (!response.didCancel && response.uri) {
        setAvatar(response.uri);
        updateProfile();
      }
    });
  };

  const updateProfile = async () => {
    const updateData = {
      displayName,
      photoURL: avatar,
      phoneNumber,
    };
    try {
      await auth.currentUser.updateProfile(updateData);
      alert("Profile updated");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <TouchableOpacity onPress={handleImagePick}>
        <Avatar
          size={250}
          rounded
          source={{ uri: avatar || "https://i.pravatar.cc/300" }}
          style={{
            width: 250,
            height: 250,
            bottom: 100,
            boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.5)",
          }}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="Display Name"
        value={displayName}
        onChangeText={setDisplayName}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Update Profile" onPress={updateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Profile;
