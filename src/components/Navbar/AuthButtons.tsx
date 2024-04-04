"use client";
import { PRIMARY_GRADIENT } from "@/const";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const excludedPaths = ["/login", "/signup"];

export const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width: 991px)");
  const pathname = usePathname();
  return (
    <>
      {!excludedPaths.includes(pathname) && (
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
      )}
    </>
  );
};
