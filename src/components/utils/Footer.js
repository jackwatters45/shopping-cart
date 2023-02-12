import githubLogo from '../../assets/imgs/github.svg';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 30px;
`;

const GithubLogo = styled.img`
  height: 20px;
  margin: auto 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>Copyright © {new Date().getFullYear()} jackwatters45</p>
    <a
      style={{ display: 'flex' }}
      target="_blank"
      rel="noreferrer"
      href="https://github.com/jackwatters45/"
    >
      <GithubLogo src={githubLogo} alt="Github Logo" />
    </a>
  </FooterContainer>
);

export default Footer;
