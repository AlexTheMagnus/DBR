import React from 'react';
import AceDiceFace from './AceDiceFace';
import KingDiceFace from './KingDiceFace';
import QueenDiceFace from './QueenDiceFace';
import JackDiceFace from './JackDiceFace';
import TenDiceFace from './TenDiceFace';
import NineDiceFace from './NineDiceFace';

const DiceFace = ({ face }) => {
  switch (face) {
    case 'ace':
      return <AceDiceFace />;

    case 'king':
      return <KingDiceFace />;

    case 'queen':
      return <QueenDiceFace />;

    case 'jack':
      return <JackDiceFace />;

    case 'ten':
      return <TenDiceFace />;

    case 'nine':
      return <NineDiceFace />;

    default:
      return <AceDiceFace />;
  }
};

export default DiceFace;
