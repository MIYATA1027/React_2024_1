import {
  Select,
  selectClasses,
  SelectProps,
  MenuItem,
  styled
} from "@mui/material";

export type comboItem = {
  key: number;
  value: string;
  label: string;
};

export interface MySelectProps extends SelectProps<string> {
  data: comboItem[];
}

export const MySelectBox = (props: MySelectProps) => {
  const { data, ...other } = props;

  const MySelect = styled((props: SelectProps<string>) => (
    <Select {...props} />
  ))(() => ({
    [`&.${selectClasses.select}`]: {
      height: "20px",
      fontSize: "14px",
      marginRight: "50px",
      display: "inline"
    }
  }));

  return (
    <MySelect {...other}>
      {data.map((item: comboItem) => {
        return (
          <MenuItem key={item.key} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </MySelect>
  );
};
