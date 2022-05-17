import React from 'react';
import { logoThumbnail } from '../../assets/images';
import { PenSvg } from '../../assets/svg';

type Props = {
  children: React.ReactNode;
};
function AuthTemplate({ children }: Props) {
  return (
    <div className='flex flex-col m-auto h-screen items-center justify-center'>
      <div className='relative w-20 h-20'>
        <img src={logoThumbnail} alt='Logo' className='h-full w-full' />
        <div className='h-1/3 w-1/3 absolute top-0 -right-1/4'>
          <PenSvg className='h-full w-full' />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default AuthTemplate;
