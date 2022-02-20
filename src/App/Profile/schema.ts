import { FirestoreDataConverter } from "firebase/firestore";
import * as yup from "yup";

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type Profile = {
  fullName: string;
  address: string;
  mobileNumber: string;
};

const phMobileNumberRegex = /^(09|\+639)\d{9}$/;
const profileObject: PartialRecord<keyof Profile, yup.AnySchema> = {
  fullName: yup.string().required("name is required"),
  address: yup.string().required("address is required"),
  mobileNumber: yup
    .string()
    .matches(phMobileNumberRegex, "invalid mobile number"),
};

export const schema = yup.object(profileObject);

export const profileConverter: FirestoreDataConverter<Profile> = {
  toFirestore: (profile) => profile,
  fromFirestore: (snapshot, options) => snapshot.data(options) as Profile,
};
