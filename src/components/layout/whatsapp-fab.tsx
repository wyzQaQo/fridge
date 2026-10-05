"use client";

import { motion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { SITE } from "@/data/site";

export function WhatsAppFAB() {
  return (
    <motion.a
      href={`https://wa.me/${SITE.contact.whatsapp.replace(/\+/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30 duration-[2000ms]" />
      <WhatsappLogo weight="fill" className="relative h-7 w-7" />
    </motion.a>
  );
}
