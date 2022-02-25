import { FirestoreDataConverter } from "firebase/firestore";
import { Profile } from "./types";

export const profileConverter: FirestoreDataConverter<Profile> = {
  toFirestore: (profile) => profile,
  fromFirestore: (snapshot, options) => snapshot.data(options) as Profile,
};
