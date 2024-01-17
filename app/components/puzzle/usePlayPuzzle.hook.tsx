import { puzzleModel, puzzleProps } from "./puzzle.types";
import useWordBoard from "./useBoard.hook";

const usePuzzle = (wordSearch: puzzleModel) => {
  const wordBoardProps = useWordBoard(wordSearch, {});
  return { wordBoardProps } as puzzleProps;
};

export default usePuzzle;
