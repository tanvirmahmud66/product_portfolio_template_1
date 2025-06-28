import React from "react";

const QuoteForm: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md md:p-8">
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Name *"
          className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/80 focus:ring-2 focus:ring-white focus:outline-none"
        />
        <input
          type="text"
          placeholder="Service *"
          className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/80 focus:ring-2 focus:ring-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email *"
          className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/80 focus:ring-2 focus:ring-white focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone *"
          className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/80 focus:ring-2 focus:ring-white focus:outline-none"
        />
        <textarea
          placeholder="Message *"
          className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/80 focus:ring-2 focus:ring-white focus:outline-none md:col-span-2"
          rows={4}
        />
        <div className="md:col-span-2">
          <div className="rounded-md border border-white/30 bg-white/10 p-4 text-center text-sm text-white/80">
            I'm not a robot [reCAPTCHA Placeholder]
          </div>
        </div>
        <div className="text-center md:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#1a2b6d] transition hover:bg-white/90"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
