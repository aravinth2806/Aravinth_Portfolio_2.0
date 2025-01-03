import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          name="user_name"
          required
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 outline-none transition-all duration-300"
          placeholder="Your Name"
        />
      </div>
      <div className="relative">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          name="user_email"
          required
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 outline-none transition-all duration-300"
          placeholder="Your Email"
        />
      </div>
      <div className="relative">
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 outline-none transition-all duration-300"
          placeholder="Your Message"
        ></motion.textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-primary-light to-primary-dark hover:from-primary hover:to-primary-dark text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-70 shadow-lg hover:shadow-xl transition-all duration-300"
        disabled={loading}
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};