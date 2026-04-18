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
        className="pointer-events-none fixed bottom-28 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-32 sm:right-5"
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
          className="pointer-events-auto flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white py-2 pl-2 pr-4 text-sm font-bold text-gray-900 shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
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
