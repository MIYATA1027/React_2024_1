import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Login } from "./Login";
import { NhkApi } from "./Conpornents/Nhk/NhkApi";
import { NowOnAir } from "./Conpornents/Nhk/NowOnAir";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/NhkApi" element={<NhkApi />} />
          <Route path="/NowOnAir" element={<NowOnAir />} />
          <Route path="/Page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
