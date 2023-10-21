import { useNavigate } from "react-router-dom";

export const Page2 = () => {
  var doc = document.getElementById("id") as HTMLInputElement;
  var strage = document.getElementById("strage") as HTMLInputElement;
  var input = document.getElementById("input") as HTMLInputElement;

  let navigate = useNavigate();
  return (
    <>
      <h3>Page2です。</h3>
      <div>{doc?.value}</div>
      <div>{strage?.value}</div>
      <div>{input?.value}</div>
      <button onClick={() => navigate("/Home")}>戻る</button>
    </>
  );
};
