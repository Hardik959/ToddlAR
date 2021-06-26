import React from "react";

const Alphabet = ({ ar, qr }) => {
  return (
    <div className='containerEffect'>
      <div className='card'>
        <div className='card-face card1'>
          <div className='qr'>
            <span>{ar}</span>
          </div>
        </div>
        <div className='card-face card2'>
          <div className='qr'>
            <img src={qr}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
