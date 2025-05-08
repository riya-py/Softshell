import { FaCheckCircle, FaExchangeAlt, FaMoneyBillWave } from "react-icons/fa"

const HowItWorks = () => {
    const steps = [
        {
            Icon: <FaCheckCircle className="text-4xl text-indigo-500 mb-4" />,
            title: "Submit your license",
            description: "Upload the details of your unused software license securely through our platform. We ensure your data is protected and confidential.",
        },
        {
            Icon: <FaExchangeAlt className="text-4xl text-indigo-500 mb-4" />,
            title: "Get Evaluated",
            description: "Our team of experts will evaluate your license and provide you with a fair market value based on current demand and supply.",
        },
        {
            Icon: <FaMoneyBillWave className="text-4xl text-indigo-500 mb-4" />,
            title: "Receive Payment",
            description: "Once you accept the offer, we will process the payment quickly and securely. You can choose from various payment methods.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium">
                        Simple 3-Step Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-gray-900">
                        How it <span className="text-indigo-600">Works</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Converting your unused software licenses into cash has never been easier. Follow these three simple steps to get started.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            {/* Step number indicator */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold z-10">
                                {i + 1}
                            </div>
                            
                            {/* Step card */}
                            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center transform hover:-translate-y-1">
                                <div className="p-4 bg-indigo-50 rounded-full mb-6">
                                    {step.Icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                            
                            {/* Connector line (hidden on mobile) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-200">
                                    <div className="absolute right-0 -top-1 w-0 h-0 border-t-4 border-r-0 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-indigo-200"></div>
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