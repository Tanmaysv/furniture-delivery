export const prepareDropDownOptions = (
  options: string[]
): { value: string; label: string }[] => {
  return options.map((option) => {
    return {
      value: option,
      label: option,
    };
  });
};
