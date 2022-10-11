import { SocialIcon } from "react-social-icons";

export default function Footer({ setPage }) {
  return (
    <footer className="bg-light">
      <SocialIcon url="https://github.com/babaphillips"></SocialIcon>
      <SocialIcon url="https://www.linkedin.com/in/babaphillips/" />
      <SocialIcon url="https://www.instagram.com/amandavphillips/" />
    </footer>
  );
}
