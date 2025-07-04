import AddNoteModal from "@/components/AddNoteModal";
import NoteList from "@/components/NoteList";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: "First Note." },
    { id: 2, content: "Second Note." },
    { id: 3, content: "Third Note." },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  const [selectedNote, setSelectedNote] = useState(null);

  const saveNote = () => {
    if (newNote.trim() !== "") {
      if (selectedNote) {
        //Editing an existing note
        setNotes(
          notes.map((note) =>
            note.id === selectedNote.id
              ? { ...note, content: newNote.trim() }
              : note
          )
        );
        ToastAndroid.show("Note updated successfully!", ToastAndroid.SHORT);
      } else {
        // Adding a new note
        // Generate new ID for the note
        const newId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;

        // Add new note to the list
        setNotes([...notes, { id: newId, content: newNote.trim() }]);

        ToastAndroid.show("Note added successfully!", ToastAndroid.SHORT);
      }
      setNewNote(""); // Clearing Input
      setSelectedNote(null); // Clear selected note after editing
      setIsModalVisible(false); // Close Modal
    }
  };

  const deleteNote = (id) => {
    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // Logic to edit a note
          // setNotes(...) updates the notes state
          // notes.filter() creates a new array excluding the note with the specified id
          // note.id !== id filters out the note to be deleted
          setNotes(notes.filter((note) => note.id !== id));
          ToastAndroid.show("Note deleted successfully!", ToastAndroid.SHORT);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>

      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        setSelectedNote={setSelectedNote}
        setNewNote={setNewNote}
        setIsModalVisible={setIsModalVisible}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsModalVisible(true)}
      >
        <MaterialIcons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        isModalVisible={isModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        setIsModalVisible={setIsModalVisible}
        saveNote={saveNote}
        selectedNote={selectedNote}
      />
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
});

export default NoteScreen;
