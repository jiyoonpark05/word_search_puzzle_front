import { useRecoilState } from "recoil";
import {
  bunnyState,
  listeningState,
  senarioState,
  UserNameState,
} from "./BunnyStates";
import Image from "next/image";
import * as css from "./textArea.css";
import defaultBubble from "@public/images/textbubble_default.png";
import { useEffect, useState } from "react";

const TextArea = () => {
  const [state, setState] = useRecoilState(listeningState);
  const [senario, setSenario] = useRecoilState(senarioState);
  const userName = useRecoilState(UserNameState);
  const [text, setText] = useState("");

  useEffect(() => {
    switch (senario) {
      case 1:
        setState("Listen");
        setText(textArry.greeting);
        break;

      case 2:
        // if there is a name on local storage, hey to the user
        if (localStorage.getItem("puzzleUserName") !== null) {
          setText(textArry.recognize.replace("USERNAME", userName.toString));
          setSenario(4);
        } else {
          // if not, ask user name
          setState("Listen");
          setText(textArry.askName);

          // setTimeout(() => {
          //   setSenario(3);
          // }, 15000);
        }
      case 3:
        setState("Speak");
        break;

        break;
      default:
    }
  }, [senario]);

  const textArry = {
    greeting: "welcome to Puzzle forrest",
    askName: "How Do I call you?",
    recognize: "oh, <USERNAME> it's glad to see you again",
  };

  return (
    <div className={css.textArea} onClick={(e) => setSenario(senario + 1)}>
      {state == "Speak" ? (
        <div>?</div>
      ) : // <Image src={defaultBubble} alt="img">
      //   speak
      // </Image>
      state == "Listen" ? (
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
