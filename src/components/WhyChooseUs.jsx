const features = [
    { title: "Verified Buyers", desc: "Only legit businesses buy your license." },
    { title: "Secure Process", desc: "Encrypted submissions and secure payments." },
    { title: "Lightning Fast", desc: "Most deals close within 24 hours." }
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why <span className="text-indigo-600">Choose Us</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  