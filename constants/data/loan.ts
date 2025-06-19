interface InputProps {
  value: string;
  label: string;
}

export const provinces: InputProps[] = [
  { value: "Northern", label: "Northern" },
  { value: "Western", label: "Western" },
  { value: "Southern", label: "Southern" },
  { value: "Eastern", label: "Eastern" },
  { value: "Lusaka", label: "Lusaka" },
  { value: "Central", label: "Central" },
  { value: "North Western", label: "North Western" },
  { value: "Copperbelt", label: "Copperbelt" },
  { value: "Muchinga", label: "Muchinga" },
  { value: "Luapula", label: "Luapula" },
];

export const genderOptions: InputProps[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];
