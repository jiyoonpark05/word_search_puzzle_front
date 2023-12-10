import { MouseEventHandler } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/atoms";
import * as css from "./modal.css";

const Modal = ({
  children,
  onClose,
}: {
  children: any;
  onClose: MouseEventHandler;
}) => {
  const isOpen = useRecoilValue(modalState);

  if (!isOpen) return null;

  return <div className={css.modalContainer}>{children}</div>;
};

export default Modal;
