import React from 'react';
import { SvgIcon } from '@material-ui/core';

const QueenDiceFace = (props) => (
  <SvgIcon {...props}>
    <path
      id="ace"
      fill="transparent"
      stroke="white"
      stroke-width="1.5"
      d="M 3.21,1.26
           C 3.21,1.26 21.79,1.26 21.79,1.26
             22.87,1.26 23.74,2.18 23.74,3.33
             23.74,3.33 23.74,21.67 23.74,21.67
             23.74,22.82 22.87,23.74 21.79,23.74
             21.79,23.74 3.21,23.74 3.21,23.74
             2.13,23.74 1.26,22.82 1.26,21.67
             1.26,21.67 1.26,3.33 1.26,3.33
             1.26,2.18 2.13,1.26 3.21,1.26
             3.21,1.26 3.21,1.26 3.21,1.26 Z"
    />
  </SvgIcon>
);

export default QueenDiceFace;
