import { Link } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

export const MyButton = ({ ...props }) => {
  const {
    to,
    index,
    name,
    width = "200px",
    variant = "solid",
    ...other
  } = props;

  return (
    <Link
      key={index}
      to={to}
      component={RouterLink}
      variant={variant}
      sx={{
        display: "inline-block",
        width: width,
        height: "auto",
        margin: "10px",
        fontWeight: "normal",
        fontSize: "16px",
        padding: "14px 16px",
        textAlign: "center",
        verticalAlign: "middle",
        ...other
      }}
    >
      {name}
    </Link>
  );
};
