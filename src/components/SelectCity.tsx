import { Select } from "@mantine/core";

export const SelectCity = () => {
  return (
    <Select
      label="City/Municipality"
      placeholder="Cebu"
      data={["Cebu", "Mandaue", "Lapu-Lapu"]}
      searchable
      nothingFoundMessage="Nothing found"
    />
  );
};
