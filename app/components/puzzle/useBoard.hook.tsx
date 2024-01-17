import { useEffect, useMemo, useState } from "react";
import { Coordinate, Word, BoardProps, puzzleModel } from "./puzzle.types";

const parseData = (wordSearch: puzzleModel) => {
  if (!wordSearch) {
    return {
      words: [],
      answers: [],
    };
  }

  return {
    words: [...wordSearch.puzzle],
    answers: [...wordSearch.words],
  };
};

type WordBoardCallback = {
  onComplete?: () => void;
  onMatch?: (matchedWord: Word) => void;
};

const useBoard = (wordSearch: puzzleModel, callbacks: WordBoardCallback) => {
  const initData = useMemo(() => {
    console.log(wordSearch);
    return parseData(wordSearch);
  }, [wordSearch]);

  const [words, setWords] = useState<Array<string[]>>(initData.words);
  const [answers, setAnswers] = useState<Word[]>(initData.answers);
  const [foundAnswers, setFoundAnswers] = useState<Word[]>([]);
  const [start, setStart] = useState<Coordinate | null>(null);
  const [move, setMove] = useState<Coordinate | null>(null);

  useEffect(() => {
    if (foundAnswers.length === answers.length) {
      callbacks?.onComplete?.();
    }
  }, [foundAnswers, answers]);

  const setWordBoard = (wordSearchData: puzzleModel) => {
    const data = parseData(wordSearchData);
    setWords(data.words);
    setAnswers(data.answers);
    setFoundAnswers([]);
  };

  const setFoundAnswer = (foundAnswer: Word[]) => {
    setFoundAnswers([...foundAnswer]);
  };

  /**
   * @param {Coordinate} startPos
   * @param {Coordinate} endPos
   * checking the direction by coordinates
   */
  const isValidDirection = (startPos: Coordinate, endPos: Coordinate) => {
    const angle =
      (Math.atan2(endPos.y - startPos.y, endPos.x - startPos.x) * 180) /
      Math.PI;
    return Math.abs(angle) % 45 === 0;
  };

  /**
   * @param {Array<number>} startPos
   * @param {Array<number>} endPos
   * return all the coordinate between start and end
   */
  const getPathsBetweenStartEnd = (
    startPos: Array<number>,
    endPos: Array<number>
  ) => {
    const delta = startPos.map((v, i) => endPos[i] - v);
    const distance = Math.max(...delta.map((v) => Math.abs(v)));
    const direction = delta.map((v) => v / distance);
    return [...Array(distance + 1)].map((_, i) =>
      startPos.map((v, j) => v + direction[j] * i)
    );
  };

  /**
   * @param {Coordinate} coord
   * first click
   */
  const handleStart = (coord: Coordinate) => {
    if (!start) {
      setStart({ ...coord });
      console.log(start);
    }
  };

  /**
   * @param {Coordinate} coord
   * when mouse moves
   */
  const handleMove = (coord: Coordinate) => {
    if (start) {
      setMove((curr) => {
        if (curr?.x === coord.x && curr?.y === coord.y) {
          return curr;
        }
        return coord;
      });
    }
  };

  /**
   * when mouse clicked again
   */
  const handleFinished = () => {
    const startPoint = start;
    const endPoint = move;

    // if there are starting point and endpoint
    if (startPoint && endPoint) {
      // startpoint and end point isn't same but have same direction
      console.log("sartPoint and endPoint");
      console.log(startPoint, endPoint);
      if (
        (startPoint.x !== endPoint.x || startPoint.y !== endPoint.y) &&
        isValidDirection(startPoint, endPoint)
      ) {
        // get paths between start and end point
        const paths: Array<Coordinate> = getPathsBetweenStartEnd(
          [startPoint.x, startPoint.y],
          [endPoint.x, endPoint.y]
        ).map((path) => {
          return { x: path[0], y: path[1] };
        });

        // based on the word made checking the answer
        const matchedAnswer = answers.find((e) => {
          if (
            JSON.stringify(e.path) === JSON.stringify(paths) ||
            JSON.stringify(e.path) === JSON.stringify(paths.reverse())
          ) {
            return e;
          }
          return null;
        });

        // if there is a answer check unless it isn't checked before
        if (matchedAnswer) {
          const isFoundAlready = foundAnswers
            .flatMap((e) => JSON.stringify(e.path))
            .includes(JSON.stringify(matchedAnswer.path));

          if (!isFoundAlready) {
            setFoundAnswers((curr) => [...curr, matchedAnswer]);
            callbacks?.onMatch?.(matchedAnswer);
          }
        }
      }
    }

    setStart(null);
    setMove(null);
  };

  return {
    words,
    answers,
    foundAnswers,
    start,
    move,
    handleStart,
    handleMove,
    handleFinished,
    setWordBoard,
    setFoundAnswer,
  } as BoardProps;
};
export default useBoard;
