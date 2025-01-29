import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "constants/firebaseConfig";

export const FirestoreApi = {
  getItems: async <T>(collectionName: string) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const fetchedData = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as T,
    );
    return fetchedData;
  },

  createItem: async <T>(collectionName: string, post: Omit<T, "id">) => {
    const response = await addDoc(collection(db, collectionName), post);
    return response.id;
  },
};
