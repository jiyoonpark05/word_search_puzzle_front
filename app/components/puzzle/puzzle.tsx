import { useMemo, useRef } from "react";
import Highlight from "./highlight";
import FoundAnswers from "./foundAnswers";
import styled from "styled-components";

import { BoardProps, HIGHLIGHT_COLOR } from "./puzzle.types";

const Puzzle = ({ ...props }: BoardProps) => {
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

  // cells from the puzzle board api
  const renderCells = useMemo(() => {
    const cellList = [];
    for (let y = 0; y < rowCount; y += 1) {
      for (let x = 0; x < columnCount; x += 1) {
        const keyValue = `${x}-${y}`;
        cellList.push(
          <WordTile className={keyValue} key={keyValue} data-x={x} data-y={y}>
            {words[y][x]}
          </WordTile>
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
    <Container>
      <FoundAnswers parent={gridRef.current} foundAnswers={foundAnswers} />
      <Highlight
        parent={gridRef.current}
        start={start}
        end={move}
        color={HIGHLIGHT_COLOR[foundAnswers.length % HIGHLIGHT_COLOR.length]}
      />
      <Grid
        ref={gridRef}
        row={rowCount}
        column={columnCount}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          pointerEvents: props.disabled ? "none" : "auto",
        }}
      >
        {renderCells}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  grid-row: 1 / span 3;
  width: 100%;
  max-width: 50vw;
  flex-basis: 50%;
  aspect-ratio: auto 1/1;
  border-radius: 12px;
  background-color: white;

  @media only screen and (max-width: 1000px) {
    grid-row: 2 / span 1;
    max-width: 100%;
  }
`;

const Grid = styled.div<{ column: number; row: number }>`
  position: absolute;
  z-index: 10;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: 0;
  column-gap: 0;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  grid-template-rows: repeat(${(props) => props.row}, 1fr);
`;

const WordTile = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  aspect-ratio: 1;
  font-weight: 600;
`;

export default Puzzle;
