import { BoardProps } from "./puzzle.types";
import * as css from "./sidebar.css";
import Time from "./time";

const Sidebar = ({ ...props }: BoardProps) => {
  const { answers, foundAnswers } = props;

  const wordList = answers.map((el) => {
    console.log(el);
    return <div className={css.word}>{el.word}</div>;
  });

  return (
    <div className={css.container}>
      <Time />
      <div className={css.wordListTitle}>Word List</div>
      <div className={css.wordListWrapper}>{wordList}</div>
    </div>
  );
};
export default Sidebar;
