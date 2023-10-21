import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CurrentInfoContext } from "../../Providers/CurrentInfoProvider";
import { MyButton } from "../../Common/MyButton";
import { TableHeader } from "./TableHeader";
import { TableContents, Program } from "./TableContents";
import { ApiKey } from "../../Constants";

export const NowOnAir = () => {
  const { currentInfo } = useContext(CurrentInfoContext);
  const URL = `https://api.nhk.or.jp/v2/pg/now/${currentInfo?.area}/${currentInfo?.service}.json?key=${ApiKey}`;
  // const [data, setData] = useState<Content[]>();
  const [data, setData] = useState<Program[]>([]);

  const GetApi = async () => {
    await axios.get(URL).then((res) => {
      let programs: Program[] = [];
      let previous: Program =
        res.data.nowonair_list[`${currentInfo.service}`].previous;
      programs.push(previous);
      let present: Program =
        res.data.nowonair_list[`${currentInfo.service}`].present;
      programs.push(present);
      let following: Program =
        res.data.nowonair_list[`${currentInfo.service}`].following;
      programs.push(following);
      setData(programs);
    });
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <Box>
      <MyButton
        to="/NhkApi"
        index={0}
        name="戻る"
        width="40px"
        backgroundColor="lightblue"
      ></MyButton>
      <TableHeader />
      {data && <TableContents program={data} />}
    </Box>
  );
};
