import { PartialRecord, Profile } from "types/types";
import * as yup from "yup";

const phMobileNumberRegex = /^(09|\+639)\d{9}$/;
const profileObject: PartialRecord<keyof Profile, yup.AnySchema> = {
  fullName: yup.string().required("name is required"),
  address: yup.string().required("address is required"),
  mobileNumber: yup
    .string()
    .matches(phMobileNumberRegex, "invalid mobile number"),
};

export const schema = yup.object(profileObject);
