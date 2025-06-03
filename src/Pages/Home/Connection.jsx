import linkedInLogoRd from '../../../Assets/SocialMedias/linkedInLogoRd.webp';
import facebookLogoRd from '../../../Assets/SocialMedias/facebookLogoRd.webp';
import instagramLogoRd from '../../../Assets/SocialMedias/instagramLogoRd.webp';
import pintrestLogoRd from '../../../Assets/SocialMedias/pintrestLogoRd.webp';
import youtubeLogoRd from '../../../Assets/SocialMedias/youtubeLogoRd.webp';
import xLogoRd from '../../../Assets/SocialMedias/xLogoRd.webp';

const Connect = () => {
  const socialLinks = [
    { icon: linkedInLogoRd, url: "https://www.linkedin.com/company/wixerd/", label: "LinkedIn" },
    { icon: facebookLogoRd, url: "https://www.facebook.com/profile.php?id=61569902556856", label: "Facebook" },
    { icon: instagramLogoRd, url: "https://www.instagram.com/wixerdcom", label: "Instagram" },
    { icon: pintrestLogoRd, url: "https://www.pinterest.com/wixerdcom/", label: "Pinterest" },
    { icon: youtubeLogoRd, url: "", label: "YouTube" },
    { icon: xLogoRd, url: "https://x.com/Wixerdcom", label: "X (Twitter)" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Join our community
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our community and stay connected through our social networks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with us on ${social.label}`}
                className="aspect-square  rounded-lg p-4 flex items-center justify-center transition-transform hover:scale-105"
              >
                <img 
                  src={social.icon} 
                  alt={social.label}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="mailto:inquiry@wixerd.com"
            className="text-lg text-[#8B1D1D] hover:underline"
          >
            inquiry@wixerd.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
