import React from "react";
import Alphabet from "../components/Alphabet";

const Alphabets = ({ alphabets }) => {
  return (
    <div>
      <div className='bg-headingBg'>
        <h1 className='heading'>ALPHABETS</h1>
      </div>
      <div className='bg-pagesBg pt-20'>
        <div className='notes-list mx-12'>
          {alphabets.map((alphabet) => (
            <Alphabet ar={alphabet.ar} qr={alphabet.qr} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alphabets;
