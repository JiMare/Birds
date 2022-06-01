import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h3 className="title">Teď tu byl...</h3>
      <Image
        src="/images/not-found.jpg"
        alt="footprints"
        width={300}
        height={400}
      />
      <h3 className="title">...ale odletěl</h3>
    </div>
  );
};

export default NotFound;
