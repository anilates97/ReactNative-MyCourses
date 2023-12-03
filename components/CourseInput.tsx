import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

type CourseInputProps = {
  visible: boolean;
  onAddCourse: (text: string) => void;
  onCancel: () => void;
};

export default function CourseInput({
  visible,
  onAddCourse,
  onCancel,
}: CourseInputProps) {
  const [enteredCourseText, setEnteredCourseText] = useState("");
  function handleAddCourse() {
    onAddCourse(enteredCourseText);
    setEnteredCourseText("");
  }

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/cblogo.png")}
        />
        <TextInput
          value={enteredCourseText}
          style={styles.textInput}
          placeholder="Add new course"
          onChangeText={(text) => setEnteredCourseText(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" color="#333" onPress={handleAddCourse} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "pink",
    borderColor: "pink",
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
