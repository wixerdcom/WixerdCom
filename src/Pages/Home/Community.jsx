import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Button = ({ variant, children, className = "", ...props }) => (
  <button
    className={`px-7 py-2.5 rounded-lg text-base font-semibold shadow-sm transition-colors
      ${
        variant === "outline"
          ? "border border-red-950 text-red-950 hover:bg-red-950 hover:text-white"
          : "bg-red-950 text-white hover:bg-red-900"
      }
      ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-950 focus:border-transparent text-base ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-950 focus:border-transparent text-base resize-none ${className}`}
    rows={4}
    {...props}
  />
);

const Community = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full flex flex-col items-center py-24 bg-gradient-to-br from-white to-gray-100">
      <form className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col gap-7 border border-gray-100">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900 tracking-tight">Submit Your Review</h2>
        <Input placeholder="Your Name" className="w-full" />
        <Textarea placeholder="Write your review..." className="w-full" />
        <div className="flex items-center gap-3">
          <span className="text-gray-700 font-medium text-base">Your Rating:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <AiFillStar
                key={star}
                className={`w-8 h-8 cursor-pointer transition-colors ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
            {rating > 0 && (
              <button
                type="button"
                className="ml-2 px-2 py-0.5 rounded text-xs bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={() => setRating(rating - 1)}
              >
                -
              </button>
            )}
          </div>
        </div>
        <Button variant="outline" type="submit" className="self-end mt-2">
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default Community;