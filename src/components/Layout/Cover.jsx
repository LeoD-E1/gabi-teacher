import React from 'react';

const Cover = ({
  height,
  title,
  description,
  buttonText,
  actionBtn,
  imageUrl,
  align,
  justify,
}) => {
  return (
    <div
      className='hero-area'
      style={{
        backgroundImage: `url(${imageUrl})`,
        height,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='overlay'></div>

      <div className={`h-full relative flex items-${align} justify-${justify}`}>
        <div className={`sm:p-5 md:p-10 md:max-w-3xl bg-blue`}>
          <h1 className='text-white font-bold text-4xl lg:text-5xl'>
            {title}{' '}
          </h1>
          <p className='my-8 text-white sm:text-xl lg:text-2xl'>
            {description}
          </p>
          <button className='btn-common' onClick={actionBtn}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
