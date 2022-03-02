import React from "react";

const LoadingScreen = () => {
  return (
    <div className='text-center'>
      <h1>Loading...</h1>
      <div className=' spinner-border text-info ' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
