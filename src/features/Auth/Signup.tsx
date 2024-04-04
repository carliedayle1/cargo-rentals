"use client";
import { EmailConfirmation } from "@/components/EmailConfirmation";
import { useSignupForm } from "@/hooks/useSignupForm";
import { signupWithEmailPassword } from "@/services/auth.service";
import {
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import classes from "./styles.module.css";
import { Logo } from "@/components/Navbar/Logo";
import { GoogleButton } from "./GoogleButton";
import Link from "next/link";

export function Signup() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const signupForm = useSignupForm();

  const handleSignup = async () => {
    const { email, password } = signupForm.values;

    setIsSubmitting(true);
    const { error } = await signupWithEmailPassword(email, password);

    if (error) {
      notifications.show({
        title: "Signup Error",
        message:
          "Sorry, there has been an issue signing you up. Please try again",
        color: "red",
      });
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
      setIsSubmitted(true);
      notifications.show({
        title: "Signup Successful",
        message: "You have been successfully authenticated by our system.",
        color: "green",
      });
    }
  };
  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={signupForm.values.email} />
      ) : (
        <>
          <LoadingOverlay
            visible={isSubmitting}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <Box px="md" py="xl">
            <Paper className={classes.formPaper} withBorder>
              <Text size="lg" fw={500} mb="sm">
                Welcome to <Logo />
              </Text>
              <GoogleButton />
              <Divider
                label="Or continue with"
                labelPosition="center"
                my="md"
              />
              <form onSubmit={signupForm.onSubmit(() => handleSignup())}>
                <Stack>
                  <TextInput
                    label="Email"
                    placeholder="hello@cargo.com"
                    radius="md"
                    value={signupForm.values.email}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "email",
                        event.currentTarget.value
                      )
                    }
                    error={signupForm.errors.email && signupForm.errors.email}
                  />

                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    radius="md"
                    value={signupForm.values.password}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "password",
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.password && signupForm.errors.password
                    }
                  />
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm Your password"
                    radius="md"
                    value={signupForm.values.confirmPassword}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "confirmPassword",
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.confirmPassword &&
                      signupForm.errors.confirmPassword
                    }
                  />

                  <Checkbox
                    label="I accept terms and conditions"
                    checked={signupForm.values.terms}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "terms",
                        event.currentTarget.checked
                      )
                    }
                    error={signupForm.errors.terms && signupForm.errors.terms}
                  />

                  <Button type="submit" radius="xl">
                    Signup
                  </Button>
                  <Center>
                    <Anchor
                      component={Link}
                      href="/login"
                      type="button"
                      c="dimmed"
                      size="xs"
                    >
                      Already have an account? Login now!
                    </Anchor>
                  </Center>
                  <Center>
                    <Anchor
                      component={Link}
                      href="/providers"
                      type="button"
                      c="dimmed"
                      size="xs"
                    >
                      Wan{`'`}t to Rent your Car? Create a Provider Account!
                    </Anchor>
                  </Center>
                </Stack>
              </form>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
