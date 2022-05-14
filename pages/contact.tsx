import React, { ReactElement } from "react";
import type { NextPage } from "next";
import Header from "../components/basic/Header";
import Footer from "../components/basic/Footer";
import Media from "../components/basic/Media";

const Contact: NextPage = (): ReactElement => {
  return (
    <>
      <div className="contact">
        <div className="titles contact__titles">
          <h3> Made by junior react developer</h3>
          <h2 className="contact__subtitle">Jitka Marešová</h2>
        </div>
        <a
          className="button button--contact"
          href="mailto:jitkamares10@gmail.com"
        >
          Napište mi
        </a>
      </div>
      <Media />
    </>
  );
};

export default Contact;
