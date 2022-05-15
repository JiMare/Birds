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

      <div className="header__title">{title}</div>

      <input
        type="checkbox"
        className="header__checkbox"
        id="header-checkbox"
      />
      <label htmlFor="header-checkbox" className="header__toggler">
        ☰
      </label>

      <ul className="header__list">
        {navigationLinks.map((link) => (
          <li key={link.name} className="header__item">
            <Link href={link.href}>
              <a className="header__link">{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
