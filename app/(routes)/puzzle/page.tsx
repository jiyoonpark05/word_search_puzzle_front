"use client";
import * as css from "./page.css";
import Puzzle from "../../components/puzzle/puzzle";
import { puzzleModel } from "@/app/components/puzzle/puzzle.types";
import useBoard from "@/app/components/puzzle/useBoard.hook";
import Sidebar from "@/app/components/puzzle/sidebar";

interface PuzzleProps {
  puzzle: puzzleModel;
}

export default function PlayPuzzle({ puzzle }: PuzzleProps) {
  const puzzleModel = {
    id: "hello",
    color_code: "black",
    attempt_count: "",
    progress_state: "R",
    limit_time: "1",
    start_date: "2024-01-01",
    end_date: "2024-01-01",
    words: [
      {
        word: "ORM",
        path: [
          { x: 1, y: 5 },
          { x: 1, y: 4 },
          { x: 1, y: 3 },
        ],
      },
      {
        word: "WORLD",
        path: [
          { x: 4, y: 0 },
          { x: 5, y: 0 },
          { x: 6, y: 0 },
          { x: 7, y: 0 },
        ],
      },
      {
        word: "PROGRAM",
        path: [
          { x: 2, y: 7 },
          { x: 3, y: 7 },
          { x: 4, y: 7 },
          { x: 5, y: 7 },
          { x: 6, y: 7 },
          { x: 7, y: 7 },
          { x: 8, y: 7 },
        ],
      },
    ],
    puzzle: [
      ["P", "D", "G", "H", "W", "O", "R", "L", "D", "G"],
      ["I", "U", "X", "T", "K", "K", "F", "G", "G", "B"],
      ["O", "F", "Z", "D", "H", "M", "F", "M", "U", "B"],
      ["X", "O", "B", "Z", "O", "I", "S", "H", "U", "Z"],
      ["S", "R", "R", "L", "L", "O", "S", "T", "F", "D"],
      ["O", "M", "L", "M", "H", "E", "J", "M", "H", "W"],
      ["U", "E", "I", "D", "Q", "U", "M", "R", "O", "E"],
      ["H", "O", "P", "R", "O", "G", "R", "A", "M", "N"],
      ["V", "H", "I", "H", "A", "U", "F", "V", "A", "T"],
      ["Y", "G", "E", "N", "E", "R", "A", "T", "E", "W"],
    ],
  };

  const boardProps = useBoard(puzzleModel, {});
  return (
    <div className={css.playWrapper}>
      <Puzzle {...boardProps} />
      <Sidebar {...boardProps} />
    </div>
  );
}
