"use client";
import { DateInput, DateValue } from "@mantine/dates";
import { ReactNode, useState } from "react";

interface Props {
  label?: ReactNode;
  value?: DateValue | Date;
  onChange?: (value: DateValue) => void;
  minDate?: Date;
}

export const SelectDate = ({ label, value, onChange, minDate }: Props) => {
  return (
    <DateInput
      value={value}
      onChange={onChange}
      label={label}
      placeholder="Select Date"
      minDate={minDate}
    />
  );
};
