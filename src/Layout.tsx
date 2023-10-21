import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  typographyClasses
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { HeaderNameContext } from "./Providers/HeaderNameProvider";
import { UserInfoProviderContext } from "./Providers/UserProvider";

export const Layout = () => {
  const { headerName } = useContext(HeaderNameContext);
  const { userInfo } = useContext(UserInfoProviderContext);

  const Main = styled("main")(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(5)
  }));

  const HeaderText = styled(Typography)(() => ({
    [`&.${typographyClasses.root}`]: {
      color: "white",
      fontSize: "12px"
    }
  }));

  return (
    <>
      <Typography>{headerName}</Typography>
      <AppBar sx={{ minHeight: "20px" }}>
        <Toolbar sx={{ minHeight: "20px" }}>
          <Box
            sx={{
              minHeight: "20px",
              padding: "0px",
              position: "absolute",
              right: "80px"
            }}
          >
            <HeaderText>ログインID : {userInfo.id}</HeaderText>
            <HeaderText>ユーザー名 : {userInfo.userNm}</HeaderText>
          </Box>
        </Toolbar>
      </AppBar>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
