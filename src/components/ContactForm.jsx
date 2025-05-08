import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const licenseTypes = [
    "Select License Type",
    "Enterprise Software",
    "Creative Suite",
    "Development Tools",
    "Business Applications",
    "Security Software",
    "Other"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    // License Type validation
    if (!formData.licenseType || formData.licenseType === "Select License Type") {
      newErrors.licenseType = 'Please select a license type';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Form is valid, proceed with submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    });
    // You would typically send the data to your backend here
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-16 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-purple-700 blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-indigo-600 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="bg-indigo-900/50 text-indigo-300 px-4 py-1 rounded-full text-sm font-medium">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-white">
            Get in <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have questions about selling your licenses? Our team is ready to help you get the best value for your unused software.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-indigo-500/30 transition-all duration-300">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className={`w-full p-3 rounded bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`} 
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className={`w-full p-3 rounded bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`} 
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company" 
                  className={`w-full p-3 rounded bg-gray-700 border ${errors.company ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`} 
                />
                {errors.company && <p className="mt-1 text-sm text-red-400">{errors.company}</p>}
              </div>
              
              <div>
                <label htmlFor="licenseType" className="block text-sm font-medium text-gray-300 mb-1">License Type</label>
                <select 
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full p-3 rounded bg-gray-700 border ${errors.licenseType ? 'border-red-500' : 'border-gray-600'} text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                  {licenseTypes.map((type, index) => (
                    <option key={index} value={type === "Select License Type" ? "" : type}>{type}</option>
                  ))}
                </select>
                {errors.licenseType && <p className="mt-1 text-sm text-red-400">{errors.licenseType}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Your Message" 
                  className={`w-full p-3 rounded bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              We typically respond within 24 hours. Your information is secure and will not be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm