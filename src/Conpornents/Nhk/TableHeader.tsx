import {
  TableCell,
  TableHead,
  TableRow,
  styled,
  tableCellClasses
} from "@mui/material";

export const TableHeader = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "lightGray",
      color: "black",
      fontWeight: "bold"
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));

  return (
    <TableHead>
      <StyledTableRow>
        <StyledTableCell sx={{ width: "80px" }}>放送開始</StyledTableCell>
        <StyledTableCell>番組名</StyledTableCell>
        <StyledTableCell>内容</StyledTableCell>
      </StyledTableRow>
    </TableHead>
  );
};
