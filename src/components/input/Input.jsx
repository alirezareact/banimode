const Input = ({  classname , ...rest }) => {
  return (
    <div>
      <input
        {...rest}
        type="text"
        className={`bg-white outline-none rounded-[5px] text-left ${classname}`}
      />
    </div>
  );
};

export default Input;
