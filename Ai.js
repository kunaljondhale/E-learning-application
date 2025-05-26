import React, { useState, useEffect } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import { FontAwesome } from "@expo/vector-icons";

const Ai = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
    

  const API_KEY = "AIzaSyBl30yGJ6wL5oMloEU6T0_xyMF7skuKnAA";

  useEffect(() => {
    const startChat = async () => {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = " Hello!";
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      console.log(text);
      setMessages([
        {
          text,
          user: false,
        },
      ]);
    };
    startChat();
  }, []);

  const sendMessage = async () => {
    setLoading(true);
    const userMessage = { text: userInput, user: true };
    setMessages([...messages, userMessage]);

    const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userMessage.text;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setMessages([...messages, { text, user: false }]);
    setLoading(false);
    setUserInput("");

    if (text) {
      Speech.speak(text);
    }
  };




  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={[styles.messageText, item.user && styles.userMessage]}>
        {item.text}
      </Text>
    </View>
  );



  



  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.text}
        inverted
      />
      <View style={styles.inputContainer}>
        
        {/* stop icon */}
        <TouchableOpacity style={styles.stopIcon} onPress={()=>Speech.stop()} >
          <FontAwesome
            name="close"
            size={24}
            color="black"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </TouchableOpacity>
       
        <TextInput
          placeholder="Type a message"
          onChangeText={setUserInput}
          value={userInput}
          onSubmitEditing={sendMessage}
          style={styles.input}
          placeholderTextColor="black"
        />
        {loading && <ActivityIndicator size="small" color="black" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5dc", marginTop: 5 },
  messageContainer: { padding: 10, marginVertical: 5, backgroundColor:"#d8bfd8"},
  messageText: { fontSize: 30},
  userMessage: { backgroundColor: "#6495ed" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#b0e0e6",
    borderRadius: 10,
    height: 50,
    fontSize:25
  },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
   stopIcon: {
    padding: 10,
    backgroundColor: "#ff6347",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },

  },
);

export default Ai;















