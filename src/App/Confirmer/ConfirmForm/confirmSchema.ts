import { PartialRecord } from "types/types";
import * as yup from "yup";
import Lazy from "yup/lib/Lazy";

export type ConfirmValues = {
  quantity: string;
  orderType: "refill" | "new";
};

const confirmShape: PartialRecord<
  keyof ConfirmValues,
  yup.AnySchema | Lazy<yup.AnySchema>
> = {
  quantity: yup.lazy((value) =>
    value === ""
      ? yup.string().required("quantity is required")
      : yup
          .number()
          .typeError("invalid quantity")
          .integer("invalid quantity")
          .positive("quantity must be greater than zero")
  ),
};

export const confirmSchema = yup.object(confirmShape);
