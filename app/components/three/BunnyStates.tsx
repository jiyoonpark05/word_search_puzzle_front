import { atom } from "recoil";

export const bunnyState = atom({
  key: "bunnyState",
  default: "",
});

export const UserNameState = atom<any>({
  key: "userNameStorageState",
  default: undefined,
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("userName");
      if (savedData) setSelf(JSON.parse(savedData));

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("userName")
          : localStorage.setItem("userName", JSON.stringify(newValue));
      });
    },
  ],
});

export const listeningState = atom<any>({
  key: "listeningState",
  default: "Listen",
});
