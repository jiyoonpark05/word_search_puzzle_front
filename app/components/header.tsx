"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import home from "@public/icons/home.png";
import user from "@public/icons/user.png";

import { headerStyle, wrapper, headerMenu } from "./styles.css";

export const Header = () => {
  const router = useRouter();

  const handleClickHome = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/`);
  };

  const handleClickUser = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/user`);
  };

  return (
    <header className={headerStyle}>
      <div className={wrapper}>
        <Image
          className={headerMenu}
          src={home}
          alt="img"
          onClick={handleClickHome}
        />
      </div>
      <div className={wrapper}>
        <Image
          className={headerMenu}
          src={user}
          alt="img"
          onClick={handleClickUser}
        />
      </div>
    </header>
  );
};
