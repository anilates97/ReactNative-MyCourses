import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CourseInput from "./components/CourseInput";

type Course = {
  text: string;
  id: string;
};

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  function startModal() {
    setModalIsVisible(true);
  }

  function endModal() {
    setModalIsVisible(false);
  }

  function addCourse(courseTitle: string) {
    setCourses((currentCourses) => [
      ...currentCourses,
      {
        text: courseTitle,
        id: Math.random().toString(),
      },
    ]);
    endModal();
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add course" color="red" onPress={startModal} />
        <CourseInput
          visible={modalIsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />
        <View>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  courseItem: {
    backgroundColor: "gray",
    margin: 8,
    borderRadius: 5,
  },
  courseText: {
    padding: 8,
    color: "white",
  },
});
