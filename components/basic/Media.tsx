import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Media = () => {
  return (
    <div className="media">
      <Link href="https://github.com/JiMare" passHref={true}>
        <FontAwesomeIcon icon={faGithub} className="media__icon" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jitka-mare%C5%A1ov%C3%A1/"
        passHref={true}
      >
        <FontAwesomeIcon icon={faLinkedin} className="media__icon" />
      </Link>
    </div>
  );
};

export default Media;