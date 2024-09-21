const Button = ({ label, iconURL, fullWidth }) => {
  if (label === "learn more") {
    return (
      <button className="transition-transform  duration-300 inline-flex ease-in-out transform  justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white rounded-full text-coral-red border-coral-red hover:bg-coral-red hover:text-white hover:translate-y-[-3px]">
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    );
  }

  return (
    <button
      className={`${
        fullWidth && "w-full"
      } transition-transform  duration-300 inline-flex ease-in-out transform justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white hover:translate-y-[-3px] border-coral-red hover:bg-white hover:text-coral-red`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;
