const BtnAdd = ({onclick}) => {
  return (
    <button onClick={onclick} className="p-[5px] border-[1px] border-[#d6d5d5] rounded-[6px]">
      <img className="w-[20px]" src="img/cart/add.svg" alt="" />
    </button>
  );
};

export default BtnAdd;
