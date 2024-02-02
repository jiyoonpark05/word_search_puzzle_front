import { useRouter } from "next/navigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { gameSettingState, listeningState } from "../../recoil/atoms";
import * as common from "../modal.css";
import { useModal } from "../useModal.hook";
import * as css from "./gameSetting.css";

const GameSetting = () => {
  const router = useRouter();
  const { closeModal } = useModal();
  const [optionState, setOptionState] = useRecoilState(gameSettingState);
  const optionStateValues = Object.values(optionState);
  const setState = useSetRecoilState(listeningState);

  // **[TODO]remove this after set API
  const settingInfo = [
    { title: "Level", value: ["A1", "A2", "A3"] },
    { title: "Words count", value: ["5", "10", "15"] },
    { title: "Difficulty", value: ["1", "2", "3"] },
  ];
  // **[TODO]remove this after set API

  const handleClickOptions = (title: string, item: string) => {
    const name =
      title === "Level" ? "level" : title === "Words count" ? "cnt" : "diff";

    setOptionState(() => {
      return {
        ...optionState,
        [name]: item,
      };
    });
  };

  const handleClickConfirm = (e: React.MouseEvent) => {
    e.preventDefault();
    closeModal();
    setState("Listen");

    router.push(
      `/puzzle?lang=${optionState.lang}&level=${optionState.level}&cnt=${optionState.cnt}`
    );
  };

  return (
    <>
      <div className={css.gameSetting}>
        <div className={css.gameSettingTitle}>
          {settingInfo.map((el) => (
            <div key={el.title}>{el.title}</div>
          ))}
        </div>
        <div className={css.gameSettingValueWrapper}>
          {settingInfo.map((setting) => (
            <div key={setting.title} className={css.gameSettingValue}>
              {setting.value.map((item) => {
                const isSelect = optionStateValues.includes(item);
                return (
                  <div
                    key={item}
                    className={css.gameSettingValueItem({
                      isSelected: isSelect,
                    })}
                    onClick={(e) => handleClickOptions(setting.title, item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className={common.buttonArea}>
        <div
          className={common.button({ type: "confirm" })}
          onClick={handleClickConfirm}
        >
          confirm
        </div>
      </div>
    </>
  );
};

export default GameSetting;
