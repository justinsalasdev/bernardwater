import { PartialRecord } from "types/types";
import * as yup from "yup";
import Lazy from "yup/lib/Lazy";

export type ConfirmValues = {
  quantity: string;
};

const confirmShape: PartialRecord<
  keyof ConfirmValues,
  yup.AnySchema | Lazy<yup.AnySchema>
> = {
  quantity: yup.lazy((value) =>
    value === ""
      ? yup.string()
      : yup
          .number()
          .typeError("invalid: must be a number")
          .positive("invalid: must be greater than zero")
  ),
};

export const confirmSchema = yup.object(confirmShape);
