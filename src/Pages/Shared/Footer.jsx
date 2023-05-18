import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-800 text-white">
      <div>
        <img className="w-96 h-60" src={logo} alt="" />
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-hover">Phone : O1XXXXXXXX</a>
        <a className="link link-hover">Email : example@gmail.com</a>
        <span className="footer-title mt-10">Social Link</span>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Twitter</a>
      </div>
      <div>
        <span className="footer-title">Address</span>
        <p>13681 Newport Ave #11,Tustin,California US.</p>

        <span className="footer-title mt-10">Copyright</span>
        <p>Copyright © 2023 - All right reserved by BABY CAR</p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
