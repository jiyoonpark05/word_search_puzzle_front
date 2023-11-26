import { useRecoilState } from "recoil";
import {
  bunnyState,
  listeningState,
  senarioState,
  studyLanguageState,
  UserNameState,
} from "./BunnyStates";
import Image from "next/image";
import * as css from "./textArea.css";
import defaultBubble from "@public/images/textbubble_default.png";
import selectBubble from "@public/images/textbubble_selector.png";

import { useEffect, useState } from "react";
const languageList = ["ENGLISH", "GERMAN"];

const TextArea = () => {
  const [state, setState] = useRecoilState(listeningState);
  const [senario, setSenario] = useRecoilState(senarioState);
  const [bunny, setBunny] = useRecoilState(bunnyState);
  const [userName, setUserName] = useRecoilState(UserNameState);
  const [text, setText] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [language, setLanguage] = useRecoilState(studyLanguageState);

  useEffect(() => {
    switch (senario) {
      case 1:
        setState("Listen");
        setText(textArry.greeting);
        break;

      case 2:
        // if there is a name on local storage, hey to the user
        // if not let user write their name
        localStorage.getItem("puzzleUserName") !== null
          ? setSenario(6)
          : setSenario(3);
        break;
      case 3:
        setState("Listen");
        setText(textArry.askName);
        setBunny("askName");
        break;
      case 4:
        setState("Speak");
        break;
      case 5:
        setState("Listen");
        setText(textArry.reaction.replace("<USERNAME>", userName));
        break;
      case 6:
        setText(textArry.recognize.replace("<USERNAME>", userName));
        setBunny("askName");
        break;
      case 7:
        setState("Select");
        setText(textArry.chooseType);
        break;
      default:
    }
  }, [senario]);

  const textArry = {
    greeting: "welcome to Puzzle forrest",
    askName: "How Do I call you?",
    reaction: "oh, <USERNAME> it's a beautiful name",
    recognize: "oh, <USERNAME> it's glad to see you again",
    chooseType: "awesome, what do you want for today?",
  };

  const handleSubmitName = () => {
    if (userNameInput == "") {
      return;
    }
    setUserName(userNameInput);
    setUserNameInput("");
    setSenario(senario + 1);
  };

  return (
    <div className={css.textArea}>
      {state == "Speak" ? (
        <div className={css.inputBubble}>
          <input
            type="text"
            className={css.input}
            value={userNameInput}
            onChange={(e) => setUserNameInput(e.target.value)}
          />
          <div className={css.sendButton} onClick={handleSubmitName}></div>
        </div>
      ) : state == "Listen" ? (
        <div
          className={css.textBubble}
          onClick={(e) =>
            senario == 5 ? setSenario(senario + 2) : setSenario(senario + 1)
          }
        >
          <div className={css.bubbleWrapper({ type: "default" })}>
            <Image className={css.bubble} src={defaultBubble} alt="img" />
            <span className={css.text}>{text}</span>
          </div>
        </div>
      ) : state == "Select" ? (
        <div className={css.textBubble}>
          <div className={css.bubbleWrapper({ type: "select" })}>
            <Image className={css.bubble} src={defaultBubble} alt="img" />
            <div className={css.selectWrapper}>
              {languageList.map((lang) => {
                return <div className={css.options}>{lang}</div>;
              })}
            </div>
            <span className={css.text}>{text}</span>
            {/* <Image className={css.bubble} src={selectBubble} alt="img" />
            <span className={css.text}>{text}</span>
            <div className={css.selectWrapper}>
              {languageList.map((lang) => {
                return <div className={css.options}>{lang}</div>;
              })}
            </div> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextArea;
