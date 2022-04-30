import React from "react";
import Image from "next/image";

type Props = {
    title: string;
}

const Header = ({title}: Props) => {
  return (
    <div className="header">
      <div className="bird-logo">
        <Image src="/images/bird.svg" height={35} width={35} alt="bird-logo" />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Header;
