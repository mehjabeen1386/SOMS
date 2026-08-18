

'use client';

import { useState } from 'react';
import { Heart, Gift, ShieldCheck, CheckCircle2, X } from 'lucide-react';

export default function DonatePage() {
  const [selectedPlan, setSelectedPlan] = useState<{ title: string; amount: string } | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDonateClick = (title: string, amount: string) => {
    setSelectedPlan({ title, amount });
    setIsSuccess(false);
  };

  const handleCustomDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAmount) return;
    setSelectedPlan({ title: 'Custom Contribution', amount: `₹${Number(customAmount).toLocaleString('en-IN')}` });
    setIsSuccess(false);
  };

  const processPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-100">
            <Heart className="w-3.5 h-3.5 fill-rose-600" /> Make an Impact
          </span>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Support Our Children Today</h1>
          <p className="text-slate-500 text-base">
            Your contribution directly provides nutritious food, school supplies, medical care, and a secure future.
          </p>
        </div>

        {/* Donation Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Monthly Meal Sponsor</h3>
              <div className="text-3xl font-black text-rose-600 mb-4">
                ₹2,500 <span className="text-xs font-normal text-slate-400">/ month</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Provides healthy meals and daily nutrition for one child under our care.
              </p>
            </div>
            <button
              onClick={() => handleDonateClick('Monthly Meal Sponsor', '₹2,500')}
              className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold transition shadow-sm text-center"
            >
              Donate ₹2,500
            </button>
          </div>

          {/* Tier 2 (Popular / Featured) */}
          <div className="bg-gradient-to-b from-rose-600 to-rose-700 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative transform md:-translate-y-2">
            <div className="absolute -top-3 right-6 bg-amber-400 text-slate-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Best Value
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-sm">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education Supporter</h3>
              <div className="text-3xl font-black mb-4">
                ₹5,000 <span className="text-xs font-normal text-rose-200">/ month</span>
              </div>
              <p className="text-sm text-rose-100 mb-6">
                Covers school tuition, uniforms, books, and personalized tutoring.
              </p>
            </div>
            <button
              onClick={() => handleDonateClick('Education Supporter', '₹5,000')}
              className="w-full py-3 px-4 rounded-xl bg-white text-rose-600 hover:bg-rose-50 font-semibold transition shadow-sm text-center"
            >
              Donate ₹5,000
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative hover:shadow-md transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Guardian Angel</h3>
              <div className="text-3xl font-black text-amber-600 mb-4">
                ₹10,000 <span className="text-xs font-normal text-slate-400">/ month</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Comprehensive care including medical checkups, clothing, and full education support.
              </p>
            </div>
            <button
              onClick={() => handleDonateClick('Guardian Angel', '₹10,000')}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold transition shadow-sm text-center"
            >
              Donate ₹10,000
            </button>
          </div>

        </div>

        {/* Custom Amount Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Custom Donation Amount</h3>
          <p className="text-sm text-slate-500 mb-6 text-center">Choose your own amount to contribute to HopeHaven.</p>
          <form onSubmit={handleCustomDonate} className="flex gap-4">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 font-bold">₹</span>
              <input
                type="number"
                min="100"
                required
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount (e.g. 1500)"
                className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition text-sm shrink-0"
            >
              Proceed
            </button>
          </form>
        </div>

      </div>

      {/* Donation Modal / Checkout Drawer */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Thank You, {donorName || 'Donor'}!</h3>
                <p className="text-slate-500 text-sm">
                  Your donation of <strong className="text-slate-900">{selectedPlan.amount}</strong> for <strong className="text-slate-900">{selectedPlan.title}</strong> has been successfully received. You are transforming lives!
                </p>
                <button
                  onClick={() => {
                    setSelectedPlan(null);
                    setIsSuccess(false);
                  }}
                  className="mt-4 w-full py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={processPayment} className="space-y-5">
                <div>
                  <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Secure Checkout</span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">{selectedPlan.title}</h3>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{selectedPlan.amount}</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Card Details (Simulation)</label>
                    <input
                      type="text"
                      required
                      placeholder="4242 •••• •••• 4242"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl transition shadow-sm disabled:opacity-50 mt-2"
                >
                  {loading ? 'Processing Payment...' : `Pay ${selectedPlan.amount}`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}