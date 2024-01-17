import { useRecoilState } from "recoil";
import { gameSettingState } from "../../recoil/atoms";
import * as css from "../modal.css";
const GameSetting = () => {
  const [optionState, setOptionState] = useRecoilState(gameSettingState);
  const optionStateValues = Object.values(optionState);

  const settingInfo = [
    { title: "Level", value: ["A1", "A2", "A3"] },
    { title: "Words count", value: ["5", "10", "15"] },
    { title: "Difficulty", value: ["1", "2", "3"] },
  ];

  const handleClickOptions = (title: string, item: string) => {
    const name =
      title === "Level" ? "level" : title === "Words count" ? "cnt" : "diff";

    setOptionState((prev) => {
      return {
        ...optionState,
        [name]: item,
      };
    });
  };

  const handleClickConfirmButton = () => {};

  return (
    <>
      <div className={css.gameSetting}>
        <div className={css.gameSettingTitle}>
          {settingInfo.map((el) => (
            <>
              <div>{el.title}</div>
            </>
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
      <div className={css.buttonArea}>
        <div className={css.buttonConfim} onClick={handleClickConfirmButton}>
          Confirm
        </div>
      </div>
    </>
  );
};

export default GameSetting;
