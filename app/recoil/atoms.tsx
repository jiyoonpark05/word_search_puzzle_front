import { atom } from "recoil";

export const bunnyState = atom<any>({
  key: "bunnyState",
  default: "default",
});

export const UserNameState = atom<any>({
  key: "userNameState",
  default: () => {
    // Initialize the default value using localStorage
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("puzzleUserName");
      if (savedData) {
        return JSON.parse(savedData);
      }
    }
    return undefined;
  },
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue, _, isReset) => {
        if (typeof window !== "undefined") {
          isReset
            ? localStorage.removeItem("puzzleUserName")
            : localStorage.setItem("puzzleUserName", JSON.stringify(newValue));
        }
      });
    },
  ],
});

export const listeningState = atom<any>({
  key: "listeningState",
  default: "default",
});

export const senarioState = atom<any>({
  key: "senarioState",
  default: 0,
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const gameSettingState = atom({
  key: "gameSettingState",
  default: { lang: "", level: "", cnt: "", diff: "" },
});

export const gameResultState = atom({
  key: "gameResultState",
  default: { result: "", time: 0 },
});
