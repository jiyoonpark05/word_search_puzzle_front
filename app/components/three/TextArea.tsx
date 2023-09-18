import { useRecoilState } from "recoil";
import { bunnyState, listeningState, senarioState } from "./BunnyStates";
import Image from "next/image";
import * as css from "./textArea.css";
import defaultBubble from "@public/images/textbubble_default.png";
import { useEffect, useState } from "react";

const TextArea = () => {
  const [state, setState] = useRecoilState(listeningState);
  const [senario, setSenario] = useRecoilState(senarioState);
  const [text, setText] = useState("");

  useEffect(() => {
    if (senario === "Greeting") {
      setState("Listen");
      setText(textArry.greeting);
    }
  }, [senario]);

  const textArry = {
    greeting: "welcome to Puzzle forrest",
    askName: "How Do I call you?",
    recognize: "oh, jiyoon! it's glad to see you again",
  };

  return (
    <div className={css.textArea}>
      {state == "Speak" ? (
        <Image src={defaultBubble} alt="img">
          speak
        </Image>
      ) : state == "Listen" ? (
        <div className={css.textBubble}>
          <Image className={css.defaultBubble} src={defaultBubble} alt="img" />
          <span className={css.text}>{text}</span>
        </div>
      ) : state == "Select" ? (
        <div>?</div>
      ) : (
        <div>?</div>
      )}
    </div>
  );
};

export default TextArea;
