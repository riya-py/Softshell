import { FaCheckCircle, FaExchangeAlt, FaMoneyBillWave } from "react-icons/fa"

const HowItWorks = () => {
    const steps = [
        {
            Icon: <FaCheckCircle className="text-4xl text-indigo-400 mb-4" />,
            title: "Submit your license",
            description: "Upload the details of your unused software license securely through our platform. We ensure your data is protected and confidential.",
        },
        {
            Icon: <FaExchangeAlt className="text-4xl text-indigo-400 mb-4" />,
            title: "Get Evaluated",
            description: "Our team of experts will evaluate your license and provide you with a fair market value based on current demand and supply.",
        },
        {
            Icon: <FaMoneyBillWave className="text-4xl text-indigo-400 mb-4" />,
            title: "Receive Payment",
            description: "Once you accept the offer, we will process the payment quickly and securely. You can choose from various payment methods.",
        },
    ];

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
                        Simple 3-Step Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-white">
                        How it <span className="text-indigo-400">Works</span>
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Converting your unused software licenses into cash has never been easier. Follow these three simple steps to get started.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            {/* Step number indicator */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold z-10">
                                {i + 1}
                            </div>
                            
                            {/* Step card */}
                            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col items-center text-center transform hover:-translate-y-1 group">
                                <div className="p-4 bg-indigo-900/50 rounded-full mb-6">
                                    {step.Icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                                
                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            </div>
                            
                            {/* Connector line (hidden on mobile) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-400/30">
                                    <div className="absolute right-0 -top-1 w-0 h-0 border-t-4 border-r-0 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-indigo-400/30"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks