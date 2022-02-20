import { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Profile, schema } from "./schema";

export default function ProfileEditor(
  props: Partial<Profile> & { children: ReactNode }
) {
  const { children, ...initialProfileData } = props;
  const methods = useForm<Profile>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialProfileData,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
