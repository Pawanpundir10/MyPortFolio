import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

function Contact({ contact }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // --- IMPORTANT ---
    // Replace these with Pawan's EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          setSubmitStatus('success');
          e.target.reset(); // Clear form on success
      }, (error) => {
          setSubmitStatus('error');
      }).finally(() => {
          setIsSubmitting(false);
          // Hide status message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <div className="p-4 sm:p-8 text-gray-300 overflow-y-auto h-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Contact Me</h1>
            <p className="text-gray-400">I'm open to discussing new projects and opportunities.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Have a question or a project in mind? Feel free to reach out via the form or my social links. I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>{contact.email}</span>
              </a>
              {contact.phone && (
                <a href={`tel:${contact.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-6 h-6 text-blue-400 flex items-center justify-center text-lg">📞</span>
                  <span>{contact.phone}</span>
                </a>
              )}
              <a href={`https://linkedin.com/${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6 text-blue-400" />
                <span>{contact.github}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="bg-[#252526] p-8 rounded-lg border border-gray-700 shadow-lg">
              <div className="mb-6">
                <label htmlFor="user_name" className="block text-gray-400 text-sm font-semibold mb-2">Full Name</label>
                <input type="text" id="user_name" name="user_name" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
              </div>
              <div className="mb-6">
                <label htmlFor="user_email" className="block text-gray-400 text-sm font-semibold mb-2">Email Address</label>
                <input type="email" id="user_email" name="user_email" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 text-sm font-semibold mb-2">Message</label>
                <textarea id="message" name="message" required rows="5" className="w-full bg-gray-800 border border-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"></textarea>
              </div>
              
              <div className="flex items-center justify-between">
                <button type="submit" disabled={isSubmitting} className="group flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-blue-500/30 shadow-lg">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {/* Submission Status Message */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400">
                    <XCircle className="w-5 h-5" />
                    <span>Failed to send.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

