"use client";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Burger, Box, Center } from "@mantine/core";
import { Logo } from "./Logo";
import { AuthButtons } from "./AuthButtons";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const MobileNavigation = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        size="xs"
        opened={opened}
        onClose={close}
        title={<Logo />}
        transitionProps={{
          transition: "slide-right",
        }}
      >
        <AuthButtons />
        <Center hiddenFrom="sm" pos="fixed" bottom="0" w="90%" py="8">
          <ThemeSwitcher />
        </Center>
      </Drawer>

      <Burger opened={opened} onClick={open} aria-label="Toggle navigation" />
    </>
  );
};
