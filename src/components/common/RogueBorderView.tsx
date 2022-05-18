import React from 'react';

interface Props {
  children: React.ReactNode;
}

function RogueBorderView({ children }: Props): JSX.Element {
  return <div className='border-2 border-rouge shadow-lg rounded-xl bg-gray'>{children}</div>;
}

export default RogueBorderView;
