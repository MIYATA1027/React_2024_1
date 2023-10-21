export const Page1 = () => {
  const onClick = () => {
    var win = window.open("/Page2", "Page2");
    win?.document.body.insertAdjacentHTML(
      "beforeend",
      `<div id="id" value="Appのvalue">名前</div>`
    );
  };

  return (
    <>
      <div>Page1です。</div>
      <button onClick={onClick}>実行</button>
    </>
  );
};
