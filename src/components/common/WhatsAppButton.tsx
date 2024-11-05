import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';


interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = 'Merhaba! Healy ile ilgili görüşmek istiyorum.' }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-16 lg:bottom-24 right-2 bg-[#25D366] text-white rounded-full p-3 md:px-4 md:py-3 flex items-center gap-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-[#128C7E] hover:-translate-y-1 hover:shadow-xl z-40">
        <FaWhatsapp className="text-2xl" />
        <span className="hidden md:block text-sm font-medium">Satış & Destek Ekibi</span>
      </div>
    </Link>
  );
};

export default WhatsAppButton;