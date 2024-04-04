import { Select } from "@mantine/core";

export const SelectRegion = () => {
  return (
    <Select
      label="Region"
      placeholder="Region VII"
      data={["Region VII", "Region VIII", "Calabarzon"]}
      searchable
      nothingFoundMessage="Nothing found"
    />
  );
};
