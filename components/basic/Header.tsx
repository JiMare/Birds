import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
};

type NavigationLink = {
  name: string;
  href: string;
};

const navigationLinks: NavigationLink[] = [
  { name: "Co krmit", href: "/feed" },
  { name: "Filtr", href: "/filter" },
  { name: "Katalog", href: "/catalogue" },
  { name: "Kontakt", href: "/contact" },
];

const Header = ({ title }: Props) => {

  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <a>
            <Image
              src="/images/bird.svg"
              height={35}
              width={35}
              alt="bird-logo"
            />
          </a>
        </Link>
      </div>

      <div>{title}</div>
  
        {navigationLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))} 
    </header>
  );
};

export default Header;
