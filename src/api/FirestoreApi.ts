import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
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

  createItem: async <T>(collectionName: string, item: Omit<T, "id">) => {
    const response = await addDoc(collection(db, collectionName), item);
    return response.id;
  },

  updateItem: async <T>(
    collectionName: string,
    // itemId: string,
    newData: Partial<T> & { id: string },
  ) => {
    const itemRef = doc(db, collectionName);

    await updateDoc(itemRef, newData);
    return newData.id;
  },
};
