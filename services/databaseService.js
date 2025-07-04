import { database } from "./appwrite";

const databaseService = {
  //
  async listDocuments(databaseId, collectionId) {
    try {
      const response = await database.listDocuments(databaseId, collectionId);
      return response.documents || [];
    } catch (error) {
      console.error("Error listing documents:", error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
