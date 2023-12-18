import { MouseEventHandler } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/atoms";
import * as css from "./modal.css";

const Modal = ({
  children,
  modalSize,
  onClose,
}: {
  children: any;
  modalSize: "small" | "medium" | "large";
  onClose: MouseEventHandler;
}) => {
  const isOpen = useRecoilValue(modalState);

  if (!isOpen) return null;

  return (
    <div className={css.modalWrapper}>
      <div className={css.modalContainer({ size: modalSize })}>
        <div className={css.closeHeader}>x</div>
        {children}
        <div>button</div>
      </div>
    </div>
  );
};

export default Modal;
