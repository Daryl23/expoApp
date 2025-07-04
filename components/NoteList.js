// components/NoteList.js

import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 100 }}
      renderItem={({ item }) => (
        <View style={styles.noteItem}>
          <Text style={styles.noteText}>{item.content}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => onEdit(item)}>
              <MaterialIcons name="edit" size={20} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <MaterialIcons name="delete" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

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

export default NoteList;
