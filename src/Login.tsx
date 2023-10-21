import { useContext, useLayoutEffect, useState } from "react";
import { UserInfoProviderContext } from "./Providers/UserProvider";
import { Box, TextField } from "@mui/material";
import { MyButton } from "./Common/MyButton";
import { Controller, useForm } from "react-hook-form";

type Form = {
  id: string;
  name: string;
};

export const Login = () => {
  const { setUserInfo } = useContext(UserInfoProviderContext);

  const [id, setId] = useState("");
  const [userNm, setNm] = useState("");

  useLayoutEffect(() => {
    setUserInfo({ id: id, userNm: userNm });
  }, [setUserInfo, id, userNm]);

  const onClick = () => {
    var newWin = window.open("/Page2");
    if (newWin != null) {
      var form = document.createElement("form");
      form.id = "form";
      form.method = "POST";
      form.name = "Page2";
      form.target = "/Page2";

      form.insertAdjacentHTML(
        "beforeend",
        `<input id="id" value="Loginのvalue">名前</input>`
      );
      // win.localStorage.setItem("strage", "login情報");

      var input = document.createElement("input");
      input.type = "text";
      input.id = "input";
      input.name = "Page2";
      input.value = "inputのvalue";

      newWin.document.body.insertAdjacentHTML(
        "beforeend",
        `<input id="id" value="Loginのvalue">名前</input>`
      );
      document.body.appendChild(input);
      newWin.document.body.appendChild(input);

      //form.submit();
      //form.remove();
    }
  };

  return (
    <>
      <Box sx={{ textAlign: "center", margin: "10px" }}>
        <h1>2023下半期_React実装</h1>
        <p>ID:</p>
        <input
          name="Id"
          type="Text"
          style={{ fontSize: "20px", height: "40px", width: "220px" }}
          onChange={(e) => setId(e.target.value)}
        />
        <p>ユーザー名:</p>
        <input
          name="UserNm"
          type="Text"
          style={{ fontSize: "20px", height: "40px", width: "220px" }}
          onChange={(e) => setNm(e.target.value)}
        />
        <br />

        <MyButton marginTop="30px" index={1} to="/Home" name="ログイン" />
        <div>
          <button onClick={onClick}>実行</button>
        </div>
      </Box>
    </>
  );
};
