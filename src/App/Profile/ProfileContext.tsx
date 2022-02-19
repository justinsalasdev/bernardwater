import { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";

export default function ProfileContext(props: { children: ReactNode }) {
  const methods = useForm({});
  return <FormProvider {...methods}>{props.children}</FormProvider>;
}
