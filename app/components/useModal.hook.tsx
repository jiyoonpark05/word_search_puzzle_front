import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../recoil/atoms";
import * as css from "./modal.css";
import Image from "next/image";
import cross from "@public/icons/cross.png";
import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

const Modal = ({
  children,
  modalSize,
  modalName,
  onClose,
}: {
  children: any;
  modalSize: "small" | "medium" | "large";
  modalName: string;
  onClose: () => void;
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

export { useModal, Modal };
