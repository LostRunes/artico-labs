import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";

export const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      setSubmitted(true);
      // Here you would typically send the feedback to a backend
    }
  };

  if (submitted) {
    return (
      <section className="py-16 bg-surface">
        <div className="section-container">
          <motion.div
            className="max-w-lg mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-8 h-8 text-primary fill-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your feedback helps us improve. We appreciate you taking the time to share your thoughts.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-surface">
      <div className="section-container">

        <div
          className="max-w-lg mx-auto"
          data-aos="fade-up"
        >

          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-2">Share Your Feedback</h2>

            <p className="text-muted-foreground">Help us improve your experience</p>
          </div>

          <form onSubmit={handleSubmit} className="card-premium p-6 space-y-6">

            {/* Star rating */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Rate your experience</p>


              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoveredRating || rating)
                          ? "text-primary fill-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you think... (optional)"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition-colors resize-none font-body"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={rating === 0}
              className="w-full btn-hero-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5" />
              Submit Feedback
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};
