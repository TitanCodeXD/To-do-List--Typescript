// CSS
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <span>T</span>o <span>D</span>o <span>L</span>ist{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
          alt="logo"
          width={35}
        />
      </h1>
    </header>
  );
};

export default Header;
