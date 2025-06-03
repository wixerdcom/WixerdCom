import wix1 from "../../../Assets/WebAssets/wixactAssets/ast1_2.webp";
import wix2 from "../../../Assets/WebAssets/wixactAssets/ast2_2.webp";
import wix3 from "../../../Assets/WebAssets/wixactAssets/ast3_1.webp";
import wix4 from "../../../Assets/WebAssets/wixactAssets/ast4_2.webp";
import wix5 from "../../../Assets/WebAssets/wixactAssets/ast5_3.webp";
import wix6 from "../../../Assets/WebAssets/wixactAssets/ast6_2.webp";
import wix7 from "../../../Assets/WebAssets/wixactAssets/ast7_2.webp";

const services = [
  {
    title: "Social Media Setups",
    desc: "Setting up proper social medias for your business\nLet professionals organize",
  },
  {
    title: "Social Organizing",
    desc: "Make your online presence with confidence",
  },
  {
    title: "Branding & Marketing",
    desc: "Business Winning are always professional views\nLet us design that for you!",
  },
  {
    title: "Scripting",
    desc: "Writing always takes special place in expression\nWe can help you think, organize & write",
  },
  {
    title: "Tasking & Scheduling",
    desc: "With our specialized tools we can\nbuild your business more organized",
  },
  {
    title: "Content Managing & Automations",
    desc: "With our specialized tools we can build\nyour business/gig/hobby more organized",
  },
];

const portfolioImages = [wix1, wix2, wix3, wix4, wix5, wix6, wix7];

const Wixact = () => (
  <div className="w-full px-2 sm:px-6 lg:px-12 py-8">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 text-[#3a1311]">
      Let’s get scheduled!
    </h1>
    <div className="text-center text-xl sm:text-2xl font-bold text-[#3a1311] mb-8">
      Social Media Solutions – Contents Organizing<br />
      Brand Growth – Studios – Scripting
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {services.map((srv) => (
        <div
          key={srv.title}
          className="border-2 border-[#3a1311] rounded-xl px-4 py-6 flex flex-col items-center text-center min-h-[140px] hover:shadow-lg transition"
        >
          <div className="font-extrabold text-xl sm:text-2xl mb-2 text-[#3a1311] whitespace-pre-line">
            {srv.title}
          </div>
          <div className="text-[11px] sm:text-xs text-[#3a1311] whitespace-pre-line">
            {srv.desc}
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-6 mb-6">
      <span className="font-bold text-lg text-[#3a1311]">Book an appointment?</span>
    </div>
  
    <div className="relative w-full overflow-x-hidden py-4">
      <div
        className="flex gap-8 animate-wixmarquee"
        style={{
          width: "max-content",
          animation: "wixmarquee 30s linear infinite",
        }}
      >
        {[...portfolioImages, ...portfolioImages].map((src, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow border border-[#3a1311]/10 bg-white min-w-[220px] max-w-[260px] flex items-center justify-center"
          >
            <img
              src={src}
              alt={`portfolio${(i % portfolioImages.length) + 1}`}
              className="w-full h-64 object-cover object-center"
              style={{ filter: "none" }}
            />
          </div>
        ))}
      </div>
    </div>
    <style>
      {`
        @keyframes wixmarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wixmarquee {
          will-change: transform;
        }
      `}
    </style>
  </div>
);

export default Wixact;