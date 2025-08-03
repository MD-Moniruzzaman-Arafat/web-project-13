import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A1919] text-white py-20">
        <div className="footer sm:footer-horizontal bg-[#1A1919] text-white p-10 container mx-auto border-b-1 border-[#FFFFFF66]">
          <aside className="max-w-65">
            <h1 className="font-bold text-2xl">CareerHub</h1>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <FaFacebookF className="text-[#337FFF] " />
              </div>
              <div className="bg-white p-2 rounded-full">
                <FaTwitter className="text-[#33CCFF]" />
              </div>
              <div className="bg-white p-2 rounded-full">
                <BsInstagram className="text-[#F75274]" />
              </div>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Work</a>
            <a className="link link-hover">Latest News</a>
            <a className="link link-hover">Careers</a>
          </nav>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Prototype</a>
            <a className="link link-hover">Plans & Pricing</a>
            <a className="link link-hover">Customers</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title">Support</h6>
            <a className="link link-hover">Help Desk</a>
            <a className="link link-hover">Sales</a>
            <a className="link link-hover">Become a Partner</a>
            <a className="link link-hover">Developers</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contact</h6>
            <a className="link link-hover">524 Broadway , NYC</a>
            <a className="link link-hover">+1 777 - 978 - 5570</a>
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row text-center lg:text-start justify-between container mx-auto py-10 text-[#FFFFFF66]">
          <span>@2023 CareerHub. All Rights Reserved</span>
          <span>Powered by CareerHub</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
