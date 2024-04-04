import { Select } from "@mantine/core";

export const SelectCarMake = () => {
  return (
    <Select
      label="Car Make"
      placeholder="All"
      data={["Toyota", "Subaru", "Mitsubishi"]}
      searchable
      nothingFoundMessage="Nothing found"
    />
  );
};
