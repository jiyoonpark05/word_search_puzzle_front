"use client";
import * as css from "./page.css";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { puzzleModel } from "@/app/components/puzzle/puzzle.types";
import { useModal } from "@/app/components/useModal.hook";
import { getDate } from "@/app/components/common/util";
import Modal from "@/app/components/modal";
import useBoard from "@/app/components/puzzle/useBoard.hook";
import Puzzle from "../../components/puzzle/puzzle";
import Time from "@/app/components/puzzle/time";
import GameResult from "@/app/components/modalContents/gameResult";
import GamePreview from "@/app/components/modalContents/gamePreview";
import { gameResultState, gameSettingState } from "@/app/recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

const PlayPuzzle = () => {
  const router = useRouter();
  const { isOpen, openModal, closeModal } = useModal();
  const [modalChild, setModalChild] = useState<ReactNode | null>(null);
  // const [size, setSize] = useState(window.innerWidth);
  const [gameStart, setGameStart] = useState(false);
  const optionState = useRecoilValue(gameSettingState);
  const [gameResult, setGameResult] = useRecoilState(gameResultState);
  const board = useBoard(optionState, {});

  const timeSetByDifficulty =
    optionState.diff === "1"
      ? 180
      : optionState.diff === "2"
      ? 180
      : optionState.diff === "3"
      ? 270
      : 0;

  let isReady = board.answers.length > 0;
  let noMoreRecord = false;

  // show the words you need to find
  useEffect(() => {
    if (isReady) {
      const element = (
        <GamePreview
          words={board.words}
          handleClickGameStart={handleGameStart}
        />
      );
      setModalChild(element);
      openModal();
    }
  }, [isReady]);

  useEffect(() => {
    if (gameResult.result !== "") {
      // if it's not a registerd User
      saveLocalStorage();
      // if it's a registered User

      const element = <GameResult result="P" noMoreRecord={noMoreRecord} />;
      setModalChild(element);
      openModal();
    }
  }, [gameResult]);

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

  const handleGameClear = (duration: number) => {
    setGameResult({
      result: "P",
      time: timeSetByDifficulty - duration,
      correctCnt: board.foundAnswers.length,
      dateTime: getDate(),
    });
    setGameStart(false);
  };

  // save record for non-registed User
  const saveLocalStorage = () => {
    const userRecord = localStorage.getItem("puzzleUserRecord");
    let recordData = [];

    // parse existing records if available
    if (userRecord) {
      recordData = JSON.parse(userRecord);
    }

    // non-register User allows to stack Maximum 7 records
    noMoreRecord = recordData.length === 7;

    if (!noMoreRecord) {
      recordData.push(gameResult);
    }

    localStorage.setItem("puzzleUserRecord", JSON.stringify(recordData));
  };

  // if there are no game setting info let player go back to the first page
  if (optionState.lang === "" && optionState.level === "") {
    router.push(`/`);
  }

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
            initialDuration={timeSetByDifficulty}
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
