import { useMemo, useRef } from "react";
import * as css from "./puzzle.css";
import Highlight from "./highlight";
import FoundAnswers from "./foundAnswers";

import { boardProps, HIGHLIGHT_COLOR } from "./puzzle.types";

const Puzzle = ({ ...props }: boardProps) => {
  const {
    words,
    foundAnswers,
    start,
    move,
    handleStart,
    handleMove,
    handleFinished,
  } = props;

  let rowCount = words.length;
  let columnCount = words[0].length;
  const gridRef = useRef<HTMLDivElement>(null);
  console.log(start);
  // cells from the puzzle board api
  const renderCells = useMemo(() => {
    const cellList = [];
    for (let y = 0; y < rowCount; y += 1) {
      for (let x = 0; x < columnCount; x += 1) {
        const keyValue = `${x}-${y}`;
        cellList.push(
          <div className={css.wordTitle} key={keyValue} data-x={x} data-y={y}>
            {words[y][x]}
          </div>
        );
      }
    }
    return cellList;
  }, [columnCount, rowCount, words]);

  const handleMouseDown = (e: any) => {
    const x: number = parseInt(e.target.getAttribute("data-x"), 10);
    const y: number = parseInt(e.target.getAttribute("data-y"), 10);

    handleStart({ x, y });
  };

  const handleMouseMove = (e: any) => {
    const x: number = parseInt(e.target.getAttribute("data-x"), 10);
    const y: number = parseInt(e.target.getAttribute("data-y"), 10);
    handleMove({ x, y });
  };

  const handleMouseUp = (e: any) => {
    handleFinished();
  };

  return (
    <div className={css.boardContainer}>
      <FoundAnswers parent={gridRef.current} foundAnswers={foundAnswers} />
      <Highlight
        parent={gridRef.current}
        start={start}
        end={move}
        color={HIGHLIGHT_COLOR[foundAnswers.length % HIGHLIGHT_COLOR.length]}
      />
      <div
        className={css.grid}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {renderCells}
      </div>
    </div>
  );
};
export default Puzzle;
