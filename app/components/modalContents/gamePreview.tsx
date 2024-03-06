import * as common from "../modal.css";

interface gamePreviewProps {
  words: string[];
  handleClickGameStart: any;
}

const GamePreview = ({ words, handleClickGameStart }: gamePreviewProps) => {
  return (
    <div>
      <div className={common.message}>you need to find this words</div>
      <div className={common.wordGrid}>
        {words.map((word: string) => {
          return (
            <>
              <div className={common.word} key={word.word}>
                - {word.word}
              </div>
              <div key={word}>뜻이어</div>
            </>
          );
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
