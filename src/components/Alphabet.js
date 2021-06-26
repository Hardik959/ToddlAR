import React from "react";

const Alphabet = ({ ar, qr }) => {
  return (
    <div className='containerEffectA'>
      <div className='cardA'>
        <div className='card-faceA card1A'>
          <div className='qrA'>
            <span>{ar}</span>
          </div>
        </div>
        <div className='card-faceA card2A'>
          <div>
            <img src={qr}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
