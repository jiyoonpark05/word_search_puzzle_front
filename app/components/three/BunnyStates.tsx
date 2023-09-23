import { atom } from "recoil";

export const bunnyState = atom<any>({
  key: "bunnyState",
  default: "default",
});

export const UserNameState = atom<any>({
  key: "userNameStorageState",
  default: undefined,
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("puzzleUserName");
      if (savedData) setSelf(JSON.parse(savedData));

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("puzzleUserName")
          : localStorage.setItem("puzzleUserName", JSON.stringify(newValue));
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
