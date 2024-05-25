import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
//  @mui
import { TextField } from "@mui/material";

RHFText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default function RHFText({ name,...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          {...other}
        />
      )}
    />
  );
}
