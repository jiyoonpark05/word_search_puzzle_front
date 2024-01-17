import { MouseEventHandler } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/atoms";
import Image from "next/image";
import cross from "@public/icons/cross.png";
import * as css from "./modal.css";

const Modal = ({
  children,
  modalSize,
  modalName,
  onClose,
}: {
  children: any;
  modalSize: "small" | "medium" | "large";
  modalName: string;
  onClose: MouseEventHandler;
}) => {
  const isOpen = useRecoilValue(modalState);

  if (!isOpen) return null;

  return (
    <>
      <div className={css.modalBackground} />
      <div className={css.modalWrapper}>
        <div className={css.modalContainer({ size: modalSize })}>
          <div className={css.closeHeader} onClick={onClose}>
            <Image className={css.crossIcon} src={cross} alt="img" />
          </div>
          <div className={css.modalName}>{modalName}</div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
