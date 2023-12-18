import { mapLinear } from "three/src/math/MathUtils";
import * as css from "../modal.css";
const GameSetting = () => {
  const settingInfo = [
    { title: "난이도", value: ["A1", "A2", "A3"] },
    { title: "단어개수", value: ["5", "10", "15"] },
    { title: "난이도", value: ["1", "2", "3"] },
  ];
  return (
    <div className={css.gameSetting}>
      <div className={css.gameOption}>
        {settingInfo.map((el) => (
          <>
            <div>{el.title}</div>
            <div>{el.value}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default GameSetting;
