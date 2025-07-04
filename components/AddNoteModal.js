import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

<<<<<<< Updated upstream
const AddNoteModal = ({
  visible,
  newNote,
  onChangeNote,
  onCancel,
  onSave,
  selectedNote,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onCancel}
=======
//function based component
const AddNoteModal = ({
  isModalVisible,
  setIsModalVisible,
  newNote,
  saveNote,
  selectedNote,
  setNewNote,
}) => {
  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setIsModalVisible(false)}
>>>>>>> Stashed changes
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
<<<<<<< Updated upstream
            {selectedNote !== null ? "Edit Note" : "Add New Note"}
=======
            {selectedNote ? "Edit Note" : "Add New Note"}
>>>>>>> Stashed changes
          </Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Write your note here..."
            multiline
            value={newNote}
<<<<<<< Updated upstream
            onChangeText={onChangeNote}
          />
          <View style={styles.modalActions}>
            <TouchableOpacity
              onPress={onCancel}
=======
            onChangeText={setNewNote}
          />
          <View style={styles.modalActions}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
>>>>>>> Stashed changes
              style={[styles.modalButton, { backgroundColor: "#ccc" }]}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
<<<<<<< Updated upstream
              onPress={onSave}
              style={[styles.modalButton, { backgroundColor: "#2196F3" }]}
            >
              <Text style={{ color: "#fff" }}>Save</Text>
=======
              onPress={() => {
                saveNote();
              }}
              style={[styles.modalButton, { backgroundColor: "#2196F3" }]}
            >
              <Text style={{ color: "#fff" }}>
                {selectedNote ? "Update" : "Save"}
              </Text>
>>>>>>> Stashed changes
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

<<<<<<< Updated upstream
const styles = StyleSheet.create({
=======
export default AddNoteModal;

const styles = StyleSheet.create({
  //Modal styles
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
});

export default AddNoteModal;
=======
  modalButtonText: {
    fontSize: 16,
  },
});
>>>>>>> Stashed changes
