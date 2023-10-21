import {
  Box,
  Button,
  TableContainer,
  Table,
  Paper,
  styled,
  Typography,
  typographyClasses
} from "@mui/material";
import { CurrentInfoContext } from "../../Providers/CurrentInfoProvider";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState, useContext } from "react";
import { PrefectureArray } from "./Prefecture";
import { NhkServiceArray } from "./NhkService";
import { format } from "date-fns";
import axios from "axios";
import { MySelectBox, comboItem } from "../../Common/MySelectBox";
import { MyButton } from "../../Common/MyButton";
import { TableHeader } from "./TableHeader";
import { ApiKey } from "../../Constants";
import { TableContents, Program } from "./TableContents";

export interface IdInfo {
  id: string;
  area: string;
  service: string;
  date: string;
}

export const NhkApi = () => {
  const toDay = new Date();
  toDay.setDate(toDay.getDate() - 1);
  const dates: comboItem[] = [];
  for (let i = 0; i < 7; i++) {
    let day = toDay.setDate(toDay.getDate() + 1);
    let stDay = format(day, "yyyy-MM-dd");
    let dto: comboItem = { key: i, label: stDay, value: stDay };
    dates.push(dto);
  }

  const [area, setArea] = useState(PrefectureArray[0].value);
  const [service, setService] = useState(NhkServiceArray[0].value);
  const [date, setDate] = useState(dates[0].value);
  const [data, setData] = useState<Program[]>([]);
  const { setCurrentInfo } = useContext(CurrentInfoContext);
  const URL = `https://api.nhk.or.jp/v2/pg/list/${area}/${service}/${date}.json?key=${ApiKey}`;

  const Tx = styled(Typography)(() => ({
    [`&.${typographyClasses.root}`]: {
      fontSize: "14px",
      margin: "0px 10px",
      display: "inline"
    }
  }));

  const GetApi = () => {
    axios.get(URL).then((res) => {
      setData(res.data.list[`${service}`]);
    });
  };

  // 実行ボタン押下
  const onClick = () => {
    GetApi();
    setCurrentInfo({ area: area, service: service, date: date });
  };

  const handleAreaChange = (e: SelectChangeEvent<string>) => {
    setArea(e.target.value as string);
  };
  const handleServiceChange = (e: SelectChangeEvent<string>) => {
    setService(e.target.value as string);
  };
  const handleDateChange = (e: SelectChangeEvent<string>) => {
    setDate(e.target.value as string);
  };

  return (
    <>
      <div>
        <h3>NHK番組表を取得</h3>
        <Box>
          <Tx>地域</Tx>
          <MySelectBox
            sx={{ width: "100px" }}
            value={area}
            data={PrefectureArray}
            onChange={handleAreaChange}
          />
          <Tx>サービス</Tx>
          <MySelectBox
            sx={{ width: "240px" }}
            value={service}
            data={NhkServiceArray}
            onChange={handleServiceChange}
          />
          <Tx>日付</Tx>
          <MySelectBox
            sx={{ width: "150px" }}
            value={date}
            data={dates}
            onChange={handleDateChange}
          />
          <Button
            sx={{
              height: "50px",
              marginLeft: "20px"
            }}
            variant="contained"
            onClick={onClick}
          >
            実行
          </Button>

          <MyButton
            to="/Home"
            index={0}
            name="戻る"
            width="40px"
            backgroundColor="lightblue"
          ></MyButton>
        </Box>

        <Box>
          <MyButton
            to="/NowOnAir"
            index={0}
            name="Now OnAir"
            width="80px"
            backgroundColor="green"
          />
        </Box>

        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHeader />
              {data && <TableContents program={data} />}
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};
