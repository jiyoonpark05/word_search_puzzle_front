import * as css from "../modal.css";

const GameClear = () => {
  return (
    <div>
      <div className={css.message}>omg you made it man awesome!</div>
      <div className={css.buttonArea}>
        <div className={css.button({ type: "home" })}>home</div>
        <div className={css.button({ type: "result" })}>result</div>
      </div>
    </div>
  );
};

export default GameClear;
