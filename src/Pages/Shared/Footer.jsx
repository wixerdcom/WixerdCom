import logo from "../../../Assets/Logos/wixerdLogoWt.webp"; 
import Linkedin from "../../../Assets/SocialMedias/linkedinLogoWt.webp";
import Instagram from "../../../Assets/SocialMedias/instagramLogoWt.webp";
import X from "../../../Assets/SocialMedias/xLogoWt.webp";


const Footer = () => {
  const social = [
    { src: Linkedin, alt: "LinkedIn", url: "https://www.linkedin.com/company/wixerd/" },
    { src: Instagram, alt: "Instagram", url: "https://www.instagram.com/wixerdcom" },
    { src: X, alt: "X", url: "https://x.com/Wixerdcom" },
  ];

  const footerLinks = [
    {
      title: "Accounts",
      links: [
        { label: "My Products", href: "/" },
        { label: "Billings", href: "/" },
        { label: "Profiles", href: "/" },
        { label: "Affiliation", href: "/" },
      ],
    },
    {
      title: "Terms",
      links: [
        { label: "Rights & Legals", href: "/" },
        { label: "Trust block", href: "/" },
        { label: "Cookies", href: "/" },
        { label: "Privacy & Policies", href: "/" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Wikis", href: "/" },
        { label: "How to's", href: "/" },
        { label: "Inquire", href: "/" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "What's Wixerd", href: "/" },
        { label: "About Contents", href: "/" },
        { label: "About Products", href: "/" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4B1413] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-center">
              <img 
                src={logo} 
                alt="wixerd" 
                className="w-32 xs:w-36 sm:w-40 md:w-44" 
              />
            <p className="text-white/90 text-sm sm:text-base mt-4 mb-6 text-center">
              Innovative digital content creators
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center">
              {social.map(({ src, alt, url }) => (
                <a 
                  key={alt} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={src} alt={alt} className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h6 className="font-semibold text-sm sm:text-base mb-4">
                {section.title}
              </h6>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-xs sm:text-sm">
          <p>Copyright © 2025 Wixerd Co. L.L.C - all right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;