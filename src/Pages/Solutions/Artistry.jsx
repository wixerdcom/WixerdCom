import art1 from "../../../Assets/WebAssets/artistryAssets/ast1_1.webp";
import art2 from "../../../Assets/WebAssets/artistryAssets/ast2_1.webp";
import art3 from "../../../Assets/WebAssets/artistryAssets/ast3.webp";
import art4 from "../../../Assets/WebAssets/artistryAssets/ast4_1.webp";
import art5 from "../../../Assets/WebAssets/artistryAssets/ast5_1.webp";
import art6 from "../../../Assets/WebAssets/artistryAssets/ast5_2.webp";
import art7 from "../../../Assets/WebAssets/artistryAssets/ast6_1.webp";
import art8 from "../../../Assets/WebAssets/artistryAssets/ast7_1.webp";
import art9 from "../../../Assets/WebAssets/artistryAssets/ast8_1.webp";
import art10 from "../../../Assets/WebAssets/artistryAssets/ast9.webp";
import art11 from "../../../Assets/WebAssets/artistryAssets/ast10.webp";
import art12 from "../../../Assets/WebAssets/artistryAssets/ast11.webp";
import art13 from "../../../Assets/WebAssets/artistryAssets/ast12.webp";
import art14 from "../../../Assets/WebAssets/artistryAssets/ast13.webp";
import art15 from "../../../Assets/WebAssets/artistryAssets/ast14.webp";
import art16 from "../../../Assets/WebAssets/artistryAssets/ast15.webp";
import art17 from "../../../Assets/WebAssets/artistryAssets/ast16.webp";
import art18 from "../../../Assets/WebAssets/artistryAssets/ast17.webp";

const services = [
	{
		title: "Business & Branding ?",
		desc: "We can provide professional and Aesthetically good.\nWith Documentation to Finishing.",
	},
	{
		title: "Photo Editing",
		desc: "Got it raw? let us fix it!",
	},
	{
		title: "Designing Logo\n& icons",
		desc: "Get it done with simplicity and stylish",
	},
	{
		title: "Illustrations",
		desc: "Artistic expressions? Let us meet us the expectations.",
	},
	{
		title: "Catalogues &\nMegazines",
		desc: "Every fronts require documentations.\nAnd for you we are here, let us make the chance!",
	},
	{
		title: "Video Editing",
		desc: "Firm? Marketing? Express beyound?\nWe can help to achieve that!",
	},
	{
		title: "Infographic",
		desc: "Visualization is major key for development.\nWe can make your idea visualize with beautiful artistic touches.",
	},
	{
		title: "Digital Painting",
		desc: "At the core of Designing artist's definition is painting.\nLet us paint your inner thoughts into digital paints",
	},
];

const portfolioImages = [
	art1, art2, art3, art4, art5, art6, art7, art8, art9,
	art10, art11, art12, art13, art14, art15, art16, art17, art18,
];

const Artistry = () => (
	<div className="w-full px-2 sm:px-6 lg:px-12 py-8">
		<h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 text-[#3a1311]">
			Let’s get scheduled!
		</h1>
		<div className="text-center text-xl sm:text-2xl font-bold text-[#3a1311] mb-8">
			Illustration – Logo & icons – Videography – Photo Editing
			<br />
			Creative Layouts – Brand Identity – Digital Art
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
			<span className="font-bold text-lg text-[#3a1311]">
				Book an appointment?
		    </span>
		</div>
		{/* Infinite marquee row */}
		<div className="relative w-full overflow-x-hidden py-4">
			<div
				className="flex gap-8 animate-artmarquee"
				style={{
					width: "max-content",
					animation: "artmarquee 40s linear infinite",
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
        @keyframes artmarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-artmarquee {
          will-change: transform;
        }
      `}
		</style>
	</div>
);

export default Artistry;