import { Link } from "react-router";
import { categorys } from "./category-constant";

const Category = () => {
  return (
    <>
      {categorys.map((cat) => (
        <Link
          key={cat.id}
          to={cat.path}
          className="w-[16%] h-[200px] flex justify-center items-center rounded-[10px] p-2  hover:bg-[#E5E4E5] transition ease-in duration-300 group"
        >
          <img
            className="w-[95%] h-[95%] rounded-[8px] scale-[1] transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
            src={cat.src}
            alt=""
          />
        </Link>
      ))}
    </>
  );
};

export default Category;
