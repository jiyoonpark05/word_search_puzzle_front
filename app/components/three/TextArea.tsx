import { useRecoilState } from "recoil";
import { listeningState } from "./BunnyStates";
import * as css from "./textArea.css";

const TextArea = () => {
  const [state, setState] = useRecoilState(listeningState);

  return (
    <div className={css.textArea}>
      {state == "Speak" ? (
        <div>speak</div>
      ) : (
        <div className={css.textBubble}>listen</div>
      )}
    </div>
  );
};

export default TextArea;
