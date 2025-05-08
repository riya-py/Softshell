const ContactForm = () => {
    return (
      <section className="bg-indigo-600 text-white py-20 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-gray-800" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-gray-800" />
            <textarea rows="4" placeholder="Your Message" className="w-full p-3 rounded text-gray-800" />
            <input type="text" placeholder=""/>
            <button type="submit" className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  