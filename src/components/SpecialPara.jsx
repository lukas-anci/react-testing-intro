import React from 'react';

export default function SpecialPara(props) {
  return (
    <>
      <p style={{ color: 'tomato', fontSize: '2rem' }}>{props.children}</p>
    </>
  );
}
