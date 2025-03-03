const Button = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`bg-[#00BF6F] flex justify-center items-center cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export default Button;
