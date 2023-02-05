import githubLogo from '../assets/github.svg';
import '../styles/Footer.css';

const Footer = () => (
  <div className="footer">
    <p>Copyright © {new Date().getFullYear()} jackwatters45</p>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/jackwatters45/"
    >
      <img className="github-logo" src={githubLogo} alt="Github Logo" />
    </a>
  </div>
);

export default Footer;
