// CSS
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span>To Do List</span>
      </p>
      <div className="created">
        &copy; 2024 Created by
        <a href="https://portfolio-wesley-santos.netlify.app" target="_blank">
          <strong> Wesley Santos.</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
