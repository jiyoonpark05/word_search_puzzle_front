import {
  gameResultState,
  gameSettingState,
  senarioState,
} from "@/app/recoil/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { formatTime } from "../common/util";
import * as common from "../modal.css";
import { useModal } from "../useModal.hook";
import * as css from "./gameClear.css";

interface GameResultProps {
  result: "P" | "F"; //  Pass, Fail
  noMoreRecord?: boolean; // if it's not a register user and already saved 7 records
}

const GameResult = ({ result, noMoreRecord }: GameResultProps) => {
  const { closeModal } = useModal();
  const router = useRouter();
  const [optionState, setOptionState] = useRecoilState(gameSettingState);
  const gameSetting = useRecoilValue(gameSettingState);
  const gameResult = useRecoilValue(gameResultState);
  const setSenario = useSetRecoilState(senarioState);

  // going back to the greeting page
  const handleClickMoveHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setSenario(6);
    closeModal();

    router.push(`/`);
  };

  // move to Result page
  const handleClickMoveResult = () => {};

  // move to Register page
  const handleClickMoveRegister = () => {};
  return (
    <div>
      {result === "P" ? (
        <>
          <div className={common.message}>omg you made it man awesome!</div>
          <div className={css.resultContainer}>
            <div className={css.wrapper}>
              <div className={css.setting}>
                <div className={css.settingTitle}>language:</div>
                <div className={css.settingValue}>{gameSetting.lang}</div>
              </div>
              <div className={css.setting}>
                <div className={css.settingTitle}>level:</div>
                <div className={css.settingValue}>{gameSetting.level}</div>
              </div>
              <div className={css.setting}>
                <div className={css.settingTitle}>words:</div>
                <div className={css.settingValue}>{gameResult.correctCnt}</div>
              </div>
            </div>
            <span className={css.bar} />
            <div className={css.time}>{formatTime(gameResult.time)}</div>
          </div>
          {noMoreRecord && (
            <div className={common.message}>
              If you want to record more result{" "}
              <a
                className={common.messageAtag}
                onClick={handleClickMoveRegister}
              >
                Register
              </a>{" "}
              now!
            </div>
          )}
        </>
      ) : (
        <div className={common.message}>omg man you sucks</div>
      )}

      <div className={common.buttonArea}>
        <div
          className={common.button({ type: "home" })}
          onClick={handleClickMoveHome}
        >
          home
        </div>
        <div
          className={common.button({ type: "confirm" })}
          onClick={handleClickMoveResult}
        >
          result
        </div>
      </div>
    </div>
  );
};

export default GameResult;
