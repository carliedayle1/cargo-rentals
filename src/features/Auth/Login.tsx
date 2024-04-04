"use client";

import { useLoginForm } from "@/hooks/useLoginForm";
import { loginWithEmailPassword } from "@/services/auth.service";
import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  LoadingOverlay,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./styles.module.css";
import { GoogleButton } from "./GoogleButton";
import { NotRegisteredAlert } from "./NotRegisteredAlert";
import { NotVerifiedAlert } from "./NotVerifiedAlert";
import Link from "next/link";

const errorMessage = "Invalid login credentials";

export function Login(props: PaperProps) {
  const [notRegistered, setNotRegistered] = useState(false);
  const [notVerified, setNotVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useLoginForm();

  const { push } = useRouter();

  const handleLogin = async () => {
    const { email, password } = form.values;

    setIsSubmitting(true);
    const { error, data } = await loginWithEmailPassword(email, password);
    setIsSubmitting(false);

    if (error && error.message === errorMessage) {
      console.log(error);
      setNotRegistered(true);
    } else {
      if (data.user == null || data.session == null) {
        setNotVerified(true);
      }
      form.reset();
      setNotRegistered(false);
      setNotVerified(false);
      push("/");
      notifications.show({
        title: "Login Successful",
        message: "You have been successfully authenticated by our system.",
        color: "green",
      });
    }
  };

  return (
    <Box px="md" py="xl">
      <Paper className={classes.formPaper} withBorder {...props}>
        <LoadingOverlay
          visible={isSubmitting}
          overlayProps={{
            radius: "sm",
            blur: 2,
          }}
        />

        <Text size="lg" fw={500} mb="md">
          Welcome Back!
        </Text>
        <GoogleButton />
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(() => handleLogin())}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@cargo.com"
              radius="md"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && form.errors.email}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Input password"
              radius="md"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password && form.errors.password}
            />

            {notRegistered && <NotRegisteredAlert />}
            {notVerified && <NotVerifiedAlert />}

            <Button type="submit" radius="xl">
              Login
            </Button>
            <Center>
              <Anchor
                component={Link}
                href="/signup"
                type="button"
                c="dimmed"
                size="xs"
              >
                Don{`'`}t have an account? Register now!
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
  );
}
