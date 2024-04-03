import { Box, Group } from "@mantine/core";
import classes from "./styles.module.css";
import { Logo } from "./Logo";
import { AuthButtons } from "./AuthButtons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MobileNavigation } from "./MobileNavigation";

export const Navbar = () => {
  return (
    <Box className={classes.header}>
      <Group justify="space-between" h="100%">
        <Logo />
        <Box visibleFrom="md">
          <AuthButtons />
        </Box>
        <Box visibleFrom="sm">
          <ThemeSwitcher />
        </Box>
        <Box hiddenFrom="md">
          <MobileNavigation />
        </Box>
      </Group>
    </Box>
  );
};
