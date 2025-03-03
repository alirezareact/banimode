import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-IRANSans">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
