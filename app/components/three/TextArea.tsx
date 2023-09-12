import { useRecoilState } from "recoil";
import { listeningState } from "./BunnyStates";
import Image from "next/image";
import * as css from "./textArea.css";
import defaultBubble from "@public/textures/textbubble_default.png";

const TextArea = () => {
  const [state, setState] = useRecoilState(listeningState);

  return (
    <div className={css.textArea}>
      {state == "Speak" ? (
        <Image src={defaultBubble} alt="img">
          speak
        </Image>
      ) : (
        <div className={css.textBubble}>
          <Image src={defaultBubble} width="100%" alt="img">
            speak
          </Image>
        </div>
      )}
    </div>
  );
};

export default TextArea;
