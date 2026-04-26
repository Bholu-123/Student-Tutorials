import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { WHATSAPP_CHAT_URL } from '../../constants/contactInfo';
import CallBackModal from './CallBackModal';

const FloatingContactRail = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="pointer-events-none fixed z-40 flex gap-2
                   max-md:bottom-[max(0.75rem,env(safe-area-inset-bottom))] max-md:left-1/2 max-md:-translate-x-1/2 max-md:flex-row max-md:items-center
                   md:bottom-32 md:left-auto md:right-5 md:translate-x-0 md:flex-col md:items-end md:gap-3"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <a
          href={WHATSAPP_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-[#25D366] shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 dark:bg-gray-800 dark:ring-gray-600"
        >
          <FaWhatsapp className="h-7 w-7" />
        </a>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label="Request a call back"
          className="pointer-events-auto flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white py-2 pl-2 pr-3 text-xs font-bold text-gray-900 shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 max-md:pr-3 max-md:pl-1.5 sm:pr-4 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
            <HiPhone className="h-5 w-5 text-brand" aria-hidden />
          </span>
          Call Us
        </button>
      </div>

      <CallBackModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default FloatingContactRail;
