import { Client, Databases } from "appwrite";
import { Platform } from "react-native";

//create config object which basically contains environment variables to interact into our appwrite server
const config = {
  endPoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID,
  },
};

const client = new Client()
  .setEndpoint(config.endPoint) // Your Appwrite Endpoint
  .setProject(config.projectId); // Your project ID

switch (Platform.OS) {
  case "android":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME); // Use this for Android emulator
    break;
  case "ios":
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID); // Use this for iOS simulator
    break;
  default:
    // For web or other platforms, no need to set self-signed
    break;
}

const database = new Databases(client);

// Export the client, config, and database for use in other parts of the application
export { client, config, database };
