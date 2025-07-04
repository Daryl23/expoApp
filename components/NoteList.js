import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NoteList = ({
  notes,
  deleteNote,
  setSelectedNote,
  setNewNote,
  setIsModalVisible,
}) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 100 }}
      renderItem={({ item }) => (
        <View style={styles.noteItem}>
          <Text style={styles.noteText}>{item.content}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                // Logic to edit a note
                // setSelectedNote(item) sets the note to be edited
                // setNewNote(item.content) sets the content of the note to be edited
                // setIsModalVisible(true) opens the modal for editing
                setSelectedNote(item);
                setNewNote(item.content);
                setIsModalVisible(true);
              }}
            >
              <MaterialIcons name="edit" size={20} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <MaterialIcons name="delete" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default NoteList;

const styles = StyleSheet.create({
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
});
