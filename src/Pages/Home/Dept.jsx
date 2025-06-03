import { useNavigate } from "react-router-dom";
import mainAssetArtistry from "../../../Assets/WebAssets/mainAssetArtistry.webp";
import mainAssetSofnova from "../../../Assets/WebAssets/mainAssetSofnova.webp";
import mainAssetWixact from "../../../Assets/WebAssets/mainAssetWixact.webp";



const departments = [
    {
        id: "artistry",
        bgColor: "#0e1723",
        asset: mainAssetArtistry,
        color: "#fff",
        title: "Artistry",
        subtitle: "Aspiration to innovate and bring the exploration to arts",
        details: [
            "Illustration",
            "Logo & Icons",
            "Videography",
            "Photo Editing",
            "Creative Layouts",
            "Brand Identity",
            "Digital Art",
        ],
        btnColor: "#0e1723",
        btnBorder: "1px solid #fff",
        btnText: "Explore",
        code: "#0e1723",
    },
    {
        id: "sofnova",
        bgColor: "#a3935d",
        asset: mainAssetSofnova,
        color: "#fff",
        title: "Sofnova",
        subtitle: "Digital space for you with creativity & professionalism",
        details: [
            "UI/UX",
            "Prototype",
            "Database",
            "CMS",
            "BSM",
            "Web App",
            "Cross-Platform",
            "Software Dev",
        ],
        btnColor: "#a3935d",
        btnBorder: "1px solid #fff",
        btnText: "Explore",
        code: "#a3935d",
    },
    {
        id: "wixact",
        bgColor: "#341731",
        asset: mainAssetWixact,
        color: "#fff",
        title: "Wixact",
        subtitle: "Complete Social media and Ads solution for you, by Wixerd",
        details: [
            "Social Media Solutions",
            "Contents Organizing",
            "Brand Growth",
            "Studies",
            "Scripting",
        ],
        btnColor: "#341731",
        btnBorder: "1px solid #fff",
        btnText: "Explore",
        code: "#341731",
    },
];

const Dept = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-0 w-full">
            {departments.map((dept) => {
                const isRightImage = dept.id === "artistry" || dept.id === "wixact";
                return (
                    <div
                        key={dept.id}
                        className="w-full"
                        style={{ background: dept.bgColor, color: dept.color }}
                    >
                        <div className={`flex flex-col ${isRightImage ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch max-w-[1400px] mx-auto px-4 md:px-12 py-12 md:py-20 min-h-[380px] gap-12 md:gap-28`}>
                            {/* Image */}
                            <div className={`flex-1 flex ${isRightImage ? 'justify-start' : 'justify-end'} items-center`}>
                                <img
                                    src={dept.asset}
                                    alt={dept.title}
                                    className="max-w-xs w-full h-auto"
                                    style={{ maxWidth: 340 }}
                                />
                            </div>
                            {/* Info */}
                            <div className={`flex-1 flex flex-col justify-center ${isRightImage ? 'items-end text-right' : 'items-start text-left'} max-w-xl`}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-2">{dept.title}</h2>
                                <p className="text-base md:text-lg font-medium opacity-90 mb-3">{dept.subtitle}</p>
                                <ul className={`flex flex-wrap gap-x-4 gap-y-1 font-semibold text-base md:text-lg mb-6 ${isRightImage ? 'justify-end' : 'justify-start'}`}>
                                    {dept.details.map((item, idx) => (
                                        <li key={idx} className="inline">
                                            {item}
                                            {idx < dept.details.length - 1 ? (
                                                <span className="mx-1 font-normal opacity-60">·</span>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="border border-white text-white px-8 py-2 rounded-lg font-medium text-lg hover:bg-white hover:text-black transition"
                                    style={{
                                        color: dept.color,
                                        border: dept.btnBorder,
                                        background: "transparent",
                                    }}
                                    onClick={() => navigate(`/solutions/${dept.title}`)}
                                >
                                    {dept.btnText}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Dept;