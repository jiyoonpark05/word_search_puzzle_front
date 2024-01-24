import * as css from "../modal.css";

const GameOver = () => {
  return (
    <div>
      <div className={css.message}>omg man you sucks</div>
      <div className={css.buttonArea}>
        <div className={css.button({ type: "home" })}>home</div>
        <div className={css.button({ type: "result" })}>result</div>
      </div>
    </div>
  );
};

export default GameOver;
