import { FunctionComponent } from "react";

interface FooterProps {
  devName: string;
}

const Footer: FunctionComponent<FooterProps> = ({ devName }) => {
  return (
    <>
      <p>Devloped by: {devName}</p>
      <i className="fa-brands fa-facebook-f"></i>
      <i className="fa-brands fa-whatsapp"></i>
      <i className="fa-brands fa-youtube"></i>
      <i className="fa-brands fa-instagram"></i>
    </>
  );
};

export default Footer;
