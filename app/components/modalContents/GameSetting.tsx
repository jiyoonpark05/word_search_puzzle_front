import { mapLinear } from "three/src/math/MathUtils";
import * as css from "../modal.css";
const GameSetting = () => {
  const settingInfo = [
    { title: "Level", value: ["A1", "A2", "A3"] },
    { title: "Words count", value: ["5", "10", "15"] },
    { title: "Difficulty", value: ["1", "2", "3"] },
  ];
  return (
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
            {setting.value.map((item) => (
              <div key={item} className={css.gameSettingValueItem}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSetting;
