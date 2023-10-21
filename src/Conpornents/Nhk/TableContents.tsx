import {
  Link,
  TableBody,
  TableCell,
  TableRow,
  styled,
  tableCellClasses
} from "@mui/material";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CurrentInfoContext } from "../../Providers/CurrentInfoProvider";
import { ApiKey, ToFrom } from "../../Constants";
import { MyDialog, dialogItem } from "../../Common/MyDialog";

export interface Program {
  id: string;
  start_time: string;
  end_time: string;
  title: string;
  subtitle: string;
  content: string;
}

export const TableContents = ({ program }: { program: Program[] }) => {
  const { currentInfo } = useContext(CurrentInfoContext);
  const [info, setInfo] = useState([]);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<dialogItem>();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
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

  const GetInfoApi = async (id: string) => {
    const URL_INFO = `https://api.nhk.or.jp/v2/pg/info/${currentInfo.area}/${currentInfo.service}/${id}.json?key=${ApiKey}`;
    await axios.get(URL_INFO).then((res) => {
      setInfo(res.data.list[`${currentInfo.service}`]);
    });
  };

  // 一覧からリンクボタン押下
  const handleClickOpen = (id: string) => {
    // 番組情報取得
    GetInfoApi(id);
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };

  useEffect(() => {
    info.map((program: Program) => {
      let content: dialogItem = {
        title: program.title,
        content: program.content,
        startTime: program.start_time,
        endTime: program.end_time
      };
      return setContent(content);
    });
  }, [info]);

  return (
    <>
      <TableBody>
        {program &&
          program.map((program: Program) => {
            return (
              <StyledTableRow key={program.id}>
                <StyledTableCell component="th" scope="row">
                  {new Intl.DateTimeFormat("ja-JA", {
                    dateStyle: "short",
                    timeStyle: "short"
                  }).format(new Date(program.start_time))}
                  {ToFrom}
                  {new Intl.DateTimeFormat("ja-JA", {
                    timeStyle: "short"
                  }).format(new Date(program.end_time))}
                </StyledTableCell>
                <StyledTableCell>
                  <Link
                    href="#"
                    color="inherit"
                    className="title"
                    onClick={() => handleClickOpen(program.id)}
                  >
                    {program.title}
                  </Link>
                </StyledTableCell>
                <StyledTableCell>{program.subtitle}</StyledTableCell>
              </StyledTableRow>
            );
          })}
      </TableBody>
      {content && <MyDialog open={open} onClose={handleClose} data={content} />}
    </>
  );
};
