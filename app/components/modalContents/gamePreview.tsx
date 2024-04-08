import * as common from "../modal.css";
import { WordDetails } from "../puzzle/puzzle.types";

interface gamePreviewProps {
  words: [WordDetails];
  handleClickGameStart: any;
}

const GamePreview = ({ words, handleClickGameStart }: gamePreviewProps) => {
  console.log(words);
  return (
    <div>
      <div className={common.message}>you need to find this words</div>
      {/* <div className={common.wordGrid}> */}
      <div className={common.wordContainer}>
        <div className={common.wordGridHeader}>no</div>
        <div className={common.wordGridHeader}>speech</div>
        <div className={common.wordGridHeader}>word</div>
        <div className={common.wordGridHeader}></div>
        <div className={common.wordGridHeader}>meaning</div>
        {words.map((word, idx) => {
          console.log(word);
          return (
            <>
              <div className={common.word}>{idx + 1}</div>
              <div className={common.word}>{word.speech}</div>
              <div className={common.word}>{word.word}</div>
              <div className={common.word}>{word.gender}</div>
              <div className={common.word}>{word.koreanMeaning}</div>
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
