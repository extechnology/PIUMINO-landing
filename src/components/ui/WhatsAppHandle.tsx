import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const WhatsAppHandle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "+918589010885"; // Replace with actual phone number
  const message = "Hello! I'm interested in your services."; // Default message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <div className="relative">
        {/* Ripple Effect */}
        <div className={`absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping ${isHovered ? 'scale-125' : 'scale-100'}`} />
        
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg 
                     flex items-center justify-center transition-all duration-300 ease-out
                     hover:scale-110 hover:shadow-2xl hover:from-green-600 hover:to-green-700
                     active:scale-95 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-300" />
          ) : (
            // <MessageCircle className="w-6 h-6 text-white transition-transform duration-300" />
            <i className="fa-brands fa-whatsapp fa-2xl text-white transition-transform duration-300"></i>
          )}
        </button>

        {/* Tooltip */}
        <div className={`absolute bottom-20 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm
                        whitespace-nowrap transition-all duration-300 transform
                        ${isHovered && !isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          Need help? Chat with us!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 
                         border-transparent border-t-gray-800" />
        </div>
      </div>

      {/* Expanded Menu */}
      <div className={`absolute bottom-20 right-0 transition-all duration-500 ease-out transform-gpu
                      ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
        
        {/* WhatsApp Option */}
        <div className={`mb-4 transition-all duration-300 delay-100 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            onClick={handleWhatsAppClick}
            className="group flex items-center space-x-3 bg-white rounded-full shadow-lg 
                     px-4 py-3 hover:shadow-xl transition-all duration-300 hover:scale-105
                     border border-gray-100 hover:border-green-200"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center
                          group-hover:bg-green-600 transition-colors duration-300">
              {/* <MessageCircle className="w-5 h-5 text-white" /> */}
              <i className='fa-brands fa-whatsapp fa-lg text-white'></i>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-800 text-sm">WhatsApp</div>
              <div className="text-xs text-gray-500 pe-5">Chat with us</div>
            </div>
          </button>
        </div>

        {/* Call Option */}
        <div className={`mb-4 transition-all duration-300 delay-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            onClick={handleCallClick}
            className="group flex items-center space-x-3 bg-white rounded-full shadow-lg 
                     px-4 py-3 hover:shadow-xl transition-all duration-300 hover:scale-105
                     border border-gray-100 hover:border-blue-200"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center
                          group-hover:bg-blue-600 transition-colors duration-300">
              {/* <Phone className="w-5 h-5 text-white" /> */}
              <i className='fa-solid fa-phone fa-md text-white'></i>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-800 text-sm">Call Us</div>
              <div className="text-xs text-gray-500">{phoneNumber}</div>
            </div>
          </button>
        </div>

        {/* Contact Info Card */}
        {/* <div className={`transition-all duration-300 delay-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 max-w-xs">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full 
                            flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Customer Support</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-600">Online now</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We're here to help! Get in touch with us for quick support and assistance.
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="text-xs text-gray-500">
                <strong>Response time:</strong> Usually within 5 minutes
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Background Overlay */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 -z-10
                      ${isOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'}`}
           onClick={() => setIsOpen(false)} />
    </div>
  );
};

export default WhatsAppHandle;