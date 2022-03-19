import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { confirmSchema, ConfirmValues } from "./ConfirmForm/confirmSchema";
import ConfirmForm from "./ConfirmForm/ConfirmForm";

export default function Confirmer() {
  const methods = useForm<ConfirmValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(confirmSchema),
    defaultValues: { quantity: "1", orderType: "refill" },
  });

  return (
    <FormProvider {...methods}>
      <ConfirmForm />
    </FormProvider>
  );
}
