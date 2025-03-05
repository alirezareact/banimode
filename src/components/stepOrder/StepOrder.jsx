const StepOrder = ({
  src,
  fontWeight,
  border,
  color,
  title,
  onClickHandler,
  ...rest
}) => {
  return (
    <div onClick={onClickHandler}>
      <div
        className={`flex justify-center items-center px-[23px] py-[22px] ${border}`}
      >
        <img className="w-[40px] h-[40px]" src={`${src}`} alt="" />
      </div>
      <div className="py-[15px]">
        <p className={`text-center ${fontWeight} ${color}`}>{title}</p>
      </div>
    </div>
  );
};

export default StepOrder;
