const testimonials = [
    {
      name: "Arjun Mehta",
      title: "CTO at DevCrate",
      quote:
        "Selling our unused licenses on SoftShell was a game changer. Seamless process and fast payouts!",
      avatar: "AM"
    },
    {
      name: "Priya Sharma",
      title: "Product Manager at FinNest",
      quote:
        "I was skeptical at first, but SoftShell delivered. Transparent, quick, and totally worth it.",
      avatar: "PS"
    },
    {
      name: "Kabir Anand",
      title: "Freelancer",
      quote:
        "Earned more than I expected by reselling software I no longer needed. Highly recommend SoftShell!",
      avatar: "KA"
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-indigo-600 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-700 blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="bg-indigo-900/50 text-indigo-300 px-4 py-1 rounded-full text-sm font-medium">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              What Our <span className="text-indigo-400">Clients Say</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with SoftShell.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-indigo-500/30 transition-all duration-300 relative group"
              >
                {/* Quotation mark */}
                <div className="absolute -top-5 -left-2 text-6xl text-indigo-500/30 font-serif leading-none">
                  &ldquo;
                </div>
                
                <p className="text-gray-300 mb-6 relative z-10">"{t.quote}"</p>
                
                <div className="flex items-center">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium mr-3">
                    {t.avatar}
                  </div>
                  
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.title}</p>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="text-indigo-300 hover:text-indigo-200 font-medium flex items-center justify-center gap-2 mx-auto w-fit">
              See more customer stories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;