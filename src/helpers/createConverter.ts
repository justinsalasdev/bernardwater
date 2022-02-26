import { FirestoreDataConverter } from "firebase/firestore";

export default function createConverter<T>(): FirestoreDataConverter<T> {
  return {
    toFirestore: (data: T) => data,
    fromFirestore: (snapshot, options) => snapshot.data(options) as T,
  };
}
