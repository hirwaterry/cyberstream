import { socialLinks, companyLinks, supportLinks } from "../constants"; // Adjust these arrays as needed
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0">
          <img
            src={logo} // Update with the correct path to your logo
            alt="Cyberstream Logo"
            className="h-28 w-auto" // Adjust the height as needed
          />
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-md font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-orange-500">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Support Links */}
        <div>
          <h3 className="text-md font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-orange-500">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social Links */}
      <div className="">
          <h3 className="text-md font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-orange-500">
                  {link.icon} {/* Add icons to socialLinks */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;
