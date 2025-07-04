import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: "First Note." },
    { id: 2, content: "Second Note." },
    { id: 3, content: "Third Note." },
    { id: 4, content: "Fourth Note." },
    { id: 5, content: "Fifth Note." },
    { id: 6, content: "Sixth Note." },
    { id: 7, content: "Seventh Note." },
    { id: 8, content: "Eighth Note." },
    { id: 9, content: "Ninth Note." },
    { id: 10, content: "Tenth Note." },
    { id: 11, content: "Eleventh Note." },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.content}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <MaterialIcons name="edit" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="delete" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsModalVisible(true)}
      >
        <MaterialIcons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Note</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Write your note here..."
              multiline
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={[styles.modalButton, { backgroundColor: "#ccc" }]}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // No function yet
                  setIsModalVisible(false);
                }}
                style={[styles.modalButton, { backgroundColor: "#2196F3" }]}
              >
                <Text style={{ color: "#fff" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#444",
    marginBottom: 10,
  },
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    elevation: 2,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
  //Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  modalInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    textAlignVertical: "top",
    color: "#333",
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 16,
  },
});

export default NoteScreen;
