const databaseId = process.env.APPWRITE_DATABASE_ID;
const collectionId = process.env.APPWRITE_COLLECTION_ID;

const noteService = {
  async getNotes() {
    const response = await databaseService.listDocuments(
      databaseId,
      collectionId
    );
    if (response.error) {
      return { error: response.error };
    }
    return { data: response };
  },
};

export default noteService;
