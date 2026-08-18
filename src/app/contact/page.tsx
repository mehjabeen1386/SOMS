'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-rose-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-600 font-bold tracking-wider uppercase text-sm bg-rose-100 px-4 py-1.5 rounded-full">Get In Touch</span>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-4">We Would Love to Hear From You</h1>
          <p className="text-slate-600 text-lg">Have questions about volunteering, donations, or admissions? Send us a message!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Our Location</h3>
                <p className="text-slate-600 text-sm mt-1">123 Sunshine Avenue, Care City, HC 90210</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Phone Number</h3>
                <p className="text-slate-600 text-sm mt-1">+1 (555) 382-9102</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Email Address</h3>
                <p className="text-slate-600 text-sm mt-1">support@hopehavenoms.org</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-slate-600">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 px-6 py-2.5 bg-rose-600 text-white font-semibold rounded-xl">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input type="text" required placeholder="Volunteering / Donations / Inquiry" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows={5} required placeholder="Write your message here..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-rose-500/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}