import { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { confirmSchema, ConfirmValues } from "./confirmSchema";
import ConfirmForm from "./ConfirmForm";

export default function Confirmer() {
  const methods = useForm<ConfirmValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(confirmSchema),
    defaultValues: { quantity: "1" },
  });

  return (
    <FormProvider {...methods}>
      <ConfirmForm />
    </FormProvider>
  );
}
