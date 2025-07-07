/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const Kyc = () => {
  const [hasKyc, setHasKyc] = useState(false);

  // mock api call
  const checkKyc = () => {
    console.log("hasKyc");
    setHasKyc(true);
  };

  return (
    <div>
      {hasKyc ? (
        <div>
          <p>Has No kyc, click the buttn below to upload docs</p>
          <button>Upload kyc</button>
        </div>
      ) : (
        <div>kyc data, editale upon request</div>
      )}
    </div>
  );
};

export default Kyc;
