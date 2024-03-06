"use client";
import * as css from "./page.css";
import Puzzle from "../../components/puzzle/puzzle";
import { puzzleModel } from "@/app/components/puzzle/puzzle.types";
import useBoard from "@/app/components/puzzle/useBoard.hook";
import { useModal } from "@/app/components/useModal.hook";
import { ReactNode, useCallback, useEffect, useState } from "react";
import Modal from "@/app/components/modal";
import Time from "@/app/components/puzzle/time";
import GameResult from "@/app/components/modalContents/gameResult";
import GamePreview from "@/app/components/modalContents/gamePreview";
import getPuzzle from "@/app/lib/get-puzzle";
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
  const [puzzle, setPuzzle] = useState<puzzleModel | null>(null);
  const [board, setBoard] = useState();
  const optionState = useRecoilValue(gameSettingState);

  // open game information modal before play
  const fetchData = useCallback(async () => {
    const fetchedPuzzle = await getPuzzle(optionState);
    setPuzzle(fetchedPuzzle);
    const element = (
      <GamePreview
        words={fetchedPuzzle.data.words} // use fetched data
        handleClickGameStart={(e: React.MouseEvent) => {
          closeModal();
          setGameStart(true);
        }}
      />
    );
    console.log(fetchedPuzzle);
    setModalChild(element);
  }, [setPuzzle]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // arrange the elements depends on the window width
  // useEffect(() => {
  //   const resizeListener = () => {
  //     setSize(window.innerWidth);
  //   };
  //   window.addEventListener("resize", resizeListener);
  //   return () => {
  //     window.removeEventListener("resize", resizeListener);
  //   };
  // }, [size]);

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
  // const isComplete = board.answers.length === board.foundAnswers.length;

  // const answerArray = new Set(board.foundAnswers.map((item) => item.word));

  // const wordList = board.answers.map((el) => {
  //   // check if the word already found or not
  //   return (
  //     <div
  //       key={el.word}
  //       className={answerArray.has(el.word) ? css.wordFound : css.word}
  //     >
  //       {el.word}
  //     </div>
  //   );
  // });

  return (
    <>
      {/* <Modal
        modalName=""
        modalSize="small"
        closeButton={false}
        onClose={closeModal}
      >
        {modalChild}
      </Modal> */}
      <div className={css.playWrapper}>
        {/* <Puzzle {...board} />
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
        </div> */}
      </div>
    </>
  );
};

export default PlayPuzzle;
