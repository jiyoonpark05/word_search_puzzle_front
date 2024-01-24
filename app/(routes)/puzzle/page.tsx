"use client";
import * as css from "./page.css";
import Puzzle from "../../components/puzzle/puzzle";
import { puzzleModel } from "@/app/components/puzzle/puzzle.types";
import useBoard from "@/app/components/puzzle/useBoard.hook";
import Sidebar from "@/app/components/puzzle/sidebar";
import { RecoilRoot } from "recoil";
import { useModal } from "@/app/components/useModal.hook";
import { ReactNode, useEffect, useState } from "react";
import Modal from "@/app/components/modal";
import Time from "@/app/components/puzzle/time";
import GameClear from "@/app/components/modalContents/gameClear";
import GameOver from "@/app/components/modalContents/gameOver";

interface PuzzleProps {
  puzzle: puzzleModel;
}

export default function PlayPuzzle({ puzzle }: PuzzleProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [modalChild, setModalChild] = useState<ReactNode | null>(null);
  const [size, setSize] = useState<number>(window.innerWidth);
  useEffect(() => {
    console.log(size);
    const resizeListener = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [size]);

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
          { x: 8, y: 0 },
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
  const handleTimerFinish = () => {
    const element = <GameOver />;
    setModalChild(element);
    openModal();
  };

  const handleGameClear = () => {
    const element = <GameClear />;
    setModalChild(element);
    openModal();
  };

  const isComplete =
    boardProps.answers.length === boardProps.foundAnswers.length;

  return (
    <>
      <Modal
        modalName=""
        modalSize="small"
        closeButton={false}
        onClose={closeModal}
      >
        {modalChild}
      </Modal>
      <div className={css.playWrapper}>
        {size <= 900 && (
          <Time
            initialDuration={60}
            onFinish={handleTimerFinish}
            isComplete={isComplete}
            onClear={handleGameClear}
          />
        )}
        <Puzzle {...boardProps} />
        <Sidebar
          {...boardProps}
          isComplete={isComplete}
          handleTimerFinish={handleTimerFinish}
          handleGameClear={handleGameClear}
          windowWidth={size}
        />
      </div>
    </>
  );
}
