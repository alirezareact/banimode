import { links } from "./links.constant";
import { Link, useLocation } from "react-router";

const Links = () => {
  const location = useLocation();

  return (
    <>
      {links.map((link) => (
        <Link
          className="transition ease-in-out duration-300 py-2"
          style={{
            borderBottom:
              location.pathname === link.path
                ? "3px solid #00BF6F"
                : "transparent",
          }}
          key={link.title}
          to={link.path}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
