import React from 'react';

const features = [
  { 
    title: "Verified Buyers", 
    desc: "Only legit businesses buy your license.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    title: "Secure Process", 
    desc: "Encrypted submissions and secure payments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  { 
    title: "Lightning Fast", 
    desc: "Most deals close within 24 hours.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white py-20 px-6 md:px-16 relative">
      {/* Background decorative elements - only visible in dark mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-0 dark:opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-indigo-600 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-700 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1 rounded-full text-sm font-medium">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Why <span className="text-indigo-600 dark:text-indigo-400">Choose Us</span>?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We stand out from the competition with our commitment to security, speed, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 group shadow-sm dark:shadow-none"
            >
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 dark:from-indigo-600/5 dark:to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all">
            Learn More About Our Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;