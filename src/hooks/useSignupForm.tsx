import { ISignupFormDetails } from "@/models";
import { UseFormReturnType, useForm } from "@mantine/form";

export const useSignupForm = (): UseFormReturnType<ISignupFormDetails> => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: true,
    },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) =>
        value.length < 6 ? "Password must be at least 6 characters!" : null,
      confirmPassword: (value: string, { password }) =>
        value !== password ? "Passwords do not match!" : null,
      terms: (terms: boolean) =>
        !terms ? "You need to accept terms and conditions." : null,
    },
  });
  return form;
};
