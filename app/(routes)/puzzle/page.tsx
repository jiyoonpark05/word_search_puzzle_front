"use client";
import * as css from "./page.css";
import Puzzle from "../../components/puzzle/puzzle";
import { puzzleModel } from "@/app/components/puzzle/puzzle.types";
import useBoard from "@/app/components/puzzle/useBoard.hook";
import { useModal } from "@/app/components/useModal.hook";
import { ReactNode, useEffect, useState } from "react";
import Modal from "@/app/components/modal";
import Time from "@/app/components/puzzle/time";
import GameResult from "@/app/components/modalContents/gameResult";
import GamePreview from "@/app/components/modalContents/gamePreview";
import { gameSettingState } from "@/app/recoil/atoms";
import { useRecoilValue } from "recoil";

interface PuzzleProps {
  puzzle: puzzleModel;
}

const PlayPuzzle = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [modalChild, setModalChild] = useState<ReactNode | null>(null);
  // const [size, setSize] = useState(window.innerWidth);
  const [gameStart, setGameStart] = useState(false);
  const optionState = useRecoilValue(gameSettingState);
  const board = useBoard(optionState, {});
  const DUMMY_WORDS = ["ORM", "PROGRAM", "WORLD"];
  let isReady = board.answers.length > 0;

  useEffect(() => {
    if (isReady) {
      const element = (
        <GamePreview
          words={DUMMY_WORDS}
          handleClickGameStart={handleGameStart}
        />
      );
      setModalChild(element);
      openModal();
    }
  }, []);

  const handleGameStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setGameStart(true);
    closeModal();
  };

  const handleTimerFinish = () => {
    setGameStart(false);
    const element = <GameResult result="F" />;
    setModalChild(element);
    openModal();
  };

  const handleGameClear = () => {
    setGameStart(false);
    const element = <GameResult result="P" />;
    setModalChild(element);
    openModal();
  };

  if (isReady) {
    const answerArray = new Set(board.foundAnswers.map((item) => item.word));
    const wordList = board.answers.map((el) => {
      // check if the word already found or not
      return (
        <div
          key={el.word}
          className={answerArray.has(el.word) ? css.wordFound : css.word}
        >
          {el.word}
        </div>
      );
    });
    const isComplete = board.answers.length === board.foundAnswers.length;
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
          <Puzzle {...board} />
          <Time
            isStart={gameStart}
            initialDuration={60}
            isComplete={isComplete}
            onClear={handleGameClear}
            onFinish={handleTimerFinish}
          />
          <div>
            <div className={css.wordListTitle}>Word List</div>
            <div className={css.wordListWrapper}>{wordList}</div>
          </div>
        </div>
      </>
    );
  }
};

export default PlayPuzzle;
