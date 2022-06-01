import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Media = (): ReactElement => {
  return (
    <div className="media">
      <div className="media__icons">
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
    </div>
  );
};

export default Media;
