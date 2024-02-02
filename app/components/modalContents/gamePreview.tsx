import * as common from "../modal.css";

interface gamePreviewProps {
  words: [string];
  handleClickGameStart: any;
}

const GamePreview = ({ words, handleClickGameStart }: gamePreviewProps) => {
  console.log(words);
  return (
    <div>
      <div className={common.message}>you need to find this words</div>
      <div>
        {words.map((word: string) => {
          return <div key={word}>{word}</div>;
        })}
      </div>
      <div className={common.buttonArea}>
        <div
          className={common.button({ type: "confirm" })}
          onClick={handleClickGameStart}
        >
          Let's Play!
        </div>
      </div>
    </div>
  );
};

export default GamePreview;
