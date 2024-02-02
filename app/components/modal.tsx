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
  closeButton,
  onClose,
}: {
  children: any;
  modalSize: "small" | "medium" | "large";
  modalName: string;
  closeButton: boolean | false;
  onClose: MouseEventHandler;
}) => {
  const isOpen = useRecoilValue(modalState);

  if (!isOpen) return null;

  return (
    <>
      <div className={css.modalBackground} />
      <div className={css.modalWrapper}>
        <div className={css.modalContainer({ size: modalSize })}>
          {closeButton && (
            <div className={css.closeHeader} onClick={onClose}>
              <div className={css.modalName}>{modalName}</div>
              <Image className={css.crossIcon} src={cross} alt="img" />
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
