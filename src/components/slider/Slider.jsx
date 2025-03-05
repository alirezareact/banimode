const Slider = ({ src , size }) => {


  const _size = sizeSlider(size);
  return (
    <div className={`${_size} h-[450px] rounded-3xl mb-7`}>
      <img
        className="w-full h-full object-cover rounded-3xl"
        src={src}
        alt=""
      />
    </div>
  );
};

export default Slider;


function sizeSlider(size) {
  const result = size === "sm" ? "w-[34%]" : "w-[64%]";
  return result;
}
