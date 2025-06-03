import  { useState } from 'react';
import PhoneInput, {isSupportedCountry} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaChevronDown, FaChevronUp, FaPen, FaPaperclip, FaStar } from 'react-icons/fa';

import linkedInLogo from '../../../Assets/SocialMedias/linkedinLogoWt.webp';
import facebookLogo from '../../../Assets/SocialMedias/facebookLogoRd.webp';
import instagramLogo from '../../../Assets/SocialMedias/instagramLogoWt.webp';
import xLogo from '../../../Assets/SocialMedias/xLogoWt.webp';
import youtubeLogo from '../../../Assets/SocialMedias/youtubeLogoWt.webp';
import pintrestLogo from '../../../Assets/SocialMedias/pintrestLogoRd.webp';
import wlcmWindroid from '../../../Assets/Windroid/wlcmWindroid.webp';

const Support = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [phone, setPhone] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [reviewText, setReviewText] = useState('');

    const questions = [
        { 
            id: 1, 
            text: "What services do you offer?",
            answer: "We provide comprehensive digital solutions including web development, UI/UX design, digital marketing, and branding services tailored to your business needs."
        },
        { 
            id: 2, 
            text: "How do I schedule a meeting?",
            answer: "You can book a consultation directly through our appointment form, or contact our support team who will assist you in finding a suitable time slot."
        },
        { 
            id: 3, 
            text: "Can I get custom pricing?",
            answer: "Yes, we offer customized pricing based on project scope and requirements. Please provide details about your project for an accurate quote."
        },
        { 
            id: 4, 
            text: "What's your typical response time?",
            answer: "We aim to respond to all inquiries within 24 hours during business days. Complex queries may require up to 48 hours for a detailed response."
        },
        { 
            id: 5, 
            text: "Do you offer ongoing support?",
            answer: "Absolutely. We provide various maintenance and support packages to ensure your digital assets remain up-to-date and perform optimally."
        }
    ];

    const articles = [
        { id: 1, title: "Getting Started with Our Services", category: "Onboarding" },
        { id: 2, title: "Best Practices for Project Collaboration", category: "Collaboration" },
        { id: 3, title: "Understanding Our Pricing Structure", category: "Billing" },
        { id: 4, title: "Maximizing Your Digital Strategy", category: "Strategy" },
        { id: 5, title: "Technical Requirements Guide", category: "Technical" },
        { id: 6, title: "Success Stories: Case Studies", category: "Examples" },
        { id: 7, title: "Troubleshooting Common Issues", category: "Support" },
        { id: 8, title: "Upcoming Features Roadmap", category: "Updates" }
    ];

    const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:00 PM"];
    const interests = [
        "Web Development", 
        "UI/UX Design", 
        "Digital Marketing", 
        "Branding", 
        "E-commerce Solutions",
        "SEO Optimization",
        "Content Strategy",
        "Social Media Management"
    ];

    const reviews = [
        { id: 1, rating: 5, text: "Exceptional service and attention to detail. Our website launch was flawless!", author: "Sarah K." },
        { id: 2, rating: 5, text: "The team went above and beyond to meet our tight deadlines. Highly recommend!", author: "Michael T." },
        { id: 3, rating: 4, text: "Great communication throughout our project. Would work with them again.", author: "David P." },
        { id: 4, rating: 5, text: "Transformed our digital presence completely. Outstanding results!", author: "Emma R." }
    ];

    const toggleInterest = (interest) => {
        setSelectedInterests((prev) =>
            prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
        );
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviewText('');
    };

    return (
        <div className="max-w-[1200px] mx-auto p-4 md:p-8">
            {/* FAQ and Articles Section */}
            <div className="flex gap-8 mb-20 flex-col lg:flex-row">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {questions.map((q) => (
                            <div key={q.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <div
                                    onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                                    className="bg-gray-50 p-4 cursor-pointer flex justify-between items-center hover:bg-gray-100 transition-colors"
                                >
                                    <h3 className="font-medium text-gray-800">{q.text}</h3>
                                    {expandedQuestion === q.id ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                                </div>
                                {expandedQuestion === q.id && (
                                    <div className="p-4 bg-white text-gray-600 border-t border-gray-100">
                                        {q.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Help Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">  
                        {articles.map((article) => (
                            <div key={article.id} className="flex items-start gap-4 p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                                <div className="bg-[#8B0000] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    {article.id}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800 hover:text-[#8B0000] transition-colors">{article.title}</h3>
                                    <p className="text-sm text-gray-500">{article.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Appointment Form */}
            <section id="schedule" className="mb-15 bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">Schedule a Consultation</h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                    Let's discuss how we can help with your project. Fill out the form below and we'll get back to you promptly.
                </p>
                <form className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" placeholder="John Smith" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B0000] focus:border-transparent" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Professional Role</label>
                        <input type="text" placeholder="Marketing Director" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B0000] focus:border-transparent" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                        <input type="email" placeholder="john@company.com" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B0000] focus:border-transparent" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                        <div className="flex border border-gray-300 rounded-md">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={setPhone}
                                defaultCountry="US"
                                className="flex-1 rounded-md border-none focus:ring-2 focus:ring-[#8B0000] focus:outline-none"
                                inputComponent={({ ...rest }) => (
                                    <input {...rest} className="w-full p-3 border-none focus:ring-2 focus:ring-[#8B0000] focus:outline-none" />
                                )}
                            />
                        </div>
                    </div>

                    {/* Date Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                        <input
                            type="date"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select your interests:</label>
                        <div className="flex flex-wrap gap-3">
                            {interests.map((interest) => (
                                <button
                                    key={interest}
                                    type="button"
                                    onClick={() => toggleInterest(interest)}
                                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                                        selectedInterests.includes(interest)
                                            ? 'bg-[#8B0000] text-white border-[#8B0000]'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#8B0000]'
                                    }`}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Meeting Time:</label>
                        <div className="flex flex-wrap gap-3">
                            {timeSlots.map((time) => (
                                <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTime(time)}
                                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                                        selectedTime === time
                                            ? 'bg-[#8B0000] text-white border-[#8B0000]'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#8B0000]'
                                    }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Details:</label>
                        <div className="relative">
                            <textarea
                                placeholder="Describe your project requirements, goals, and any specific needs..."
                                required
                                className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                            />
                            <div className="absolute bottom-3 right-3 text-gray-400">
                                <FaPen />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Attach Files (Optional):</label>
                        <div className="relative">
                            <input
                                type="file"
                                onChange={(e) => setAttachment(e.target.files[0])}
                                className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                            />
                            <FaPaperclip className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8B0000]" />
                        </div>
                        {attachment && (
                            <p className="mt-2 text-sm text-gray-600">Selected file: {attachment.name}</p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-500 mb-4">
                            By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours to discuss your project.
                        </p>
                        <button 
                            type="submit" 
                            className="bg-[#8B0000] hover:bg-[#700000] text-white px-6 py-3 rounded-md w-full font-medium transition-colors"
                        >
                            Request Consultation
                        </button>
                    </div>
                </form>
            </section>

          
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="font-medium text-gray-800 mb-4">Share Your Experience from Support</h3>
                    <form onSubmit={handleReviewSubmit} className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            placeholder="Write your review..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                        />
                        <button 
                            type="submit" 
                            className="bg-[#8B0000] hover:bg-[#700000] text-white px-6 py-3 rounded-md font-medium transition-colors"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default Support;