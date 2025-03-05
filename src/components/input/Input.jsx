const Input = ({  className , ...rest }) => {
  return (
    <div className="flex justify-center">
      <input
        {...rest}
        className={`bg-white outline-none rounded-[5px] text-left ${className}`}
      />
    </div>
  );
};

export default Input;
