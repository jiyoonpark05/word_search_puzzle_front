import { useRecoilState } from "recoil";
import { listeningState } from "./BunnyStates";
import Image from "next/image";
import * as css from "./textArea.css";
import defaultBubble from "@public/images/textbubble_default.png";
// import img from "/public/textures/textbubble_default.png";

const TextArea = () => {
  const [state, setState] = useRecoilState(listeningState);
  console.log(defaultBubble);
  return (
    <div className={css.textArea}>
      {state == "Speak" ? (
        <Image src={defaultBubble} alt="img">
          speak
        </Image>
      ) : (
        <div className={css.textBubble}>
          {/* <div className={css.defaultBubble}> */}
          <Image className={css.defaultBubble} src={defaultBubble} alt="img" />
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default TextArea;
