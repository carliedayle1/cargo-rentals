"use client";
import { PRIMARY_GRADIENT } from "@/const";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width: 991px)");
  return (
    <Group grow={smallScreen}>
      <Button variant="default" component={Link} href="/login">
        Login
      </Button>
      <Button
        variant="gradient"
        gradient={PRIMARY_GRADIENT}
        component={Link}
        href="/signup"
      >
        Sign Up
      </Button>
    </Group>
  );
};
