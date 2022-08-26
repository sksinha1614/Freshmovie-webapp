import "./Header.css";
import logo from "./Fresh.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} height={100} width={201} alt="logo" />
    </div>
  );
};

export default Header;
