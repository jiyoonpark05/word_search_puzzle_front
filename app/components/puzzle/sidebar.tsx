import { useRecoilState } from "recoil";
import Modal from "../modal";
import { BoardProps, SizeProps, TimeProps } from "./puzzle.types";
import * as css from "./sidebar.css";
import Time from "./time";

const Sidebar = ({ ...props }: BoardProps & TimeProps & SizeProps) => {
  const {
    answers,
    foundAnswers,
    isComplete,
    windowWidth,
    handleTimerFinish,
    handleGameClear,
  } = props;
  const answerArray = new Set(foundAnswers.map((item) => item.word));

  const wordList = answers.map((el) => {
    return (
      <div
        key={el.word}
        className={answerArray.has(el.word) ? css.wordFound : css.word}
      >
        {el.word}
      </div>
    );
  });

  return (
    <>
      <div className={css.container}>
        {windowWidth > 900 && (
          <Time
            initialDuration={60}
            onFinish={handleTimerFinish}
            isComplete={isComplete}
            onClear={handleGameClear}
          />
        )}
        <div className={css.wordListTitle}>Word List</div>
        <div className={css.wordListWrapper}>{wordList}</div>
      </div>
    </>
  );
};
export default Sidebar;
