"use client";
import {
  Center,
  SegmentedControl,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <SegmentedControl
      value={colorScheme}
      onChange={(value) => setColorScheme(value as any)}
      data={[
        {
          value: "light",
          label: (
            <Center>
              <IconSun />
              <Text fz="sm" ml="xs">
                Light
              </Text>
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center>
              <IconMoon />
              <Text fz="sm" ml="xs">
                Dark
              </Text>
            </Center>
          ),
        },
      ]}
    ></SegmentedControl>
  );
};
