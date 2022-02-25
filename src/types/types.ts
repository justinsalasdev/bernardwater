import { User } from "firebase/auth";
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

//Profile
export type Profile = {
  fullName: string;
  address: string;
  mobileNumber: string;
};

//Auth
export type AppUser = Pick<
  User,
  "photoURL" | "displayName" | "phoneNumber" | "uid"
>;

//Product
export type Product = {
  id: string;
  name: string;
  type: "mineral" | "distilled";
  price: number;
  volume: number;
};
