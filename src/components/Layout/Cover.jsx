import React from "react";

const Cover = ({
  height,
  title,
  description,
  buttonText,
  actionBtn,
  imageUrl,
  align,
}) => {
  return (
    <div
      className="hero-area"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="overlay"></div>

      <div
        className="container relative z-10 px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={`h-100 lg:py-56 justify-${align} align-middle`}>
          <div className="md:w-6/12">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              {title}{" "}
            </h1>
            <p className="my-8 text-white">{description}</p>
            <button className="btn-common" onClick={actionBtn}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
