import React from 'react';

interface Props {
  image: string;
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
}
function ErrorScreenTemplate({ image, message, buttonText, onButtonClick }: Props) {
  return (
    <div className='flex w-full h-full items-center justify-center'>
      <img src={image} alt='error' />
      <div className='message'>{message}</div>
      {buttonText && (
        <div className='button-wrapper'>
          <button onClick={onButtonClick}>{buttonText}</button>
        </div>
      )}
    </div>
  );
}

export default ErrorScreenTemplate;
