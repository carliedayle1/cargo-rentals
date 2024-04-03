import { Text } from "@mantine/core";
import Link from "next/link";
import { PRIMARY_GRADIENT } from "@/const";

export const Logo = () => {
  return (
    <Text
      fz="lg"
      fw="bold"
      variant="gradient"
      gradient={PRIMARY_GRADIENT}
      component={Link}
      href="/"
    >
      CarGo Rentals
    </Text>
  );
};
