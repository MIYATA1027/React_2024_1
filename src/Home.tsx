import { Box } from "@mui/material";
import { useContext, useLayoutEffect } from "react";
import { HeaderNameContext } from "./Providers/HeaderNameProvider";
import { MyButton } from "./Common/MyButton";
import "./styles.css";

const MenuList = [
  {
    index: 1,
    name: "NHK",
    id: "/NhkApi"
  },
  {
    index: 2,
    name: "Page2",
    id: "/Page2"
  },
  {
    index: 9,
    name: "ログアウト",
    id: "/"
  }
];

export const Home = () => {
  const { setHeaderName } = useContext(HeaderNameContext);
  useLayoutEffect(() => {
    setHeaderName("Home画面");
  });

  return (
    <div>
      <Box sx={{ margin: "30px 50px" }}>
        <h1>Reactの実装画面</h1>
        <h3>
          目的：現場でReactを使用しているため、その復習とナレッジ化のための資料とする。
        </h3>
        <h3>[機能]</h3>
        <li>ログイン時に入力した情報はツールバーの右上に保持する。</li>
        <li>画面遷移はRouterを使用する。</li>
        <li>
          画面レイアウトはRouterとOutletを使用して共通にし、表示画面のみ書き換える。
        </li>
        <li>ツールバーのメニュー選択から各画面に遷移する。</li>
        <li>ツールバーは各画面で固定としメニュー名を各画面で編集する。</li>
      </Box>
      <Box sx={{ margin: "30px 50px" }}>
        <h2>遷移先画面</h2>
        {MenuList.map((menu) => (
          <div key={menu.index}>
            <MyButton to={menu.id} index={menu.index} name={menu.name} />
          </div>
        ))}
      </Box>
    </div>
  );
};
