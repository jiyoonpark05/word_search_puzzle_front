"use client";
import * as css from "./page.css";
import { useRouter } from "next/navigation";
import Puzzle from "../../components/puzzle/puzzle";
import { puzzleModel } from "@/app/components/puzzle/puzzle.types";
import useBoard from "@/app/components/puzzle/useBoard.hook";
import { useModal } from "@/app/components/useModal.hook";
import { ReactNode, useEffect, useState } from "react";
import { getDate } from "@/app/components/common/util";
import Modal from "@/app/components/modal";
import Time from "@/app/components/puzzle/time";
import GameResult from "@/app/components/modalContents/gameResult";
import GamePreview from "@/app/components/modalContents/gamePreview";
import { gameResultState, gameSettingState } from "@/app/recoil/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface PuzzleProps {
  puzzle: puzzleModel;
}

const PlayPuzzle = () => {
  const router = useRouter();
  const { isOpen, openModal, closeModal } = useModal();
  const [modalChild, setModalChild] = useState<ReactNode | null>(null);
  // const [size, setSize] = useState(window.innerWidth);
  const [gameStart, setGameStart] = useState(false);
  const optionState = useRecoilValue(gameSettingState);
  const setGameResult = useSetRecoilState(gameResultState);
  const gameResult = useRecoilValue(gameResultState);
  const board = useBoard(optionState, {});
  let isReady = board.answers.length > 0;

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

  const saveGameResultData = (parsedRecordData: object[]) => {
    parsedRecordData.push(gameResult);
    localStorage.setItem("puzzleUserRecord", JSON.stringify(parsedRecordData));
  };

  const handleGameClear = (duration: number) => {
    let noMoreRecord = false;

    setGameResult({
      result: "P",
      time: duration,
      correctCnt: board.foundAnswers.length,
      dateTime: getDate(),
    });

    // if it's not a registerd User (it allows Maximum 7 records)
    // [TODO] 1. if it's not a registerd User
    // 2. and it already has 7 records
    const userRecord = localStorage.getItem("puzzleUserRecord");
    if (userRecord) {
      const parsedRecordData = JSON.parse(userRecord);
      const dataLength = parsedRecordData.length;
      noMoreRecord = dataLength === 7 ? true : false;
      saveGameResultData(parsedRecordData);
    }

    // [TODO] if it's a registed User, Save result into Data

    setGameStart(false);
    const element = <GameResult result="P" noMoreRecord={noMoreRecord} />;
    setModalChild(element);
    openModal();
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
