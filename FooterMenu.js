import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterMenu = () => {
  // hooks
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5
          name="book"
          style={styles.iconStyle}
          color={route.name === "Home" && "orange"}
        />
        <Text>Course</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => navigation.navigate("post")}>
        <FontAwesome5
          name="plus-square"
          style={styles.iconStyle}
          color={route.name === "post" && "orange"}
        />
        <Text>Post</Text>
      </TouchableOpacity>





      <TouchableOpacity onPress={() => navigation.navigate("kai")}>
        <FontAwesome5
          name="search-plus"
          style={styles.iconStyle}
          color={route.name === "kai" && "orange"}
        />
        <Text>k.ai</Text>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome5
          name="user"
          style={styles.iconStyle}
          color={route.name === "Profile" && "orange"}
        />
        <Text>Profile</Text>
      </TouchableOpacity>





      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
});

export default FooterMenu;