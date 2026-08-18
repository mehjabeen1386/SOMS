'use client';

import Link from 'next/link';
import { Heart, Menu, X, User, LogIn } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-black bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                HopeHaven
              </span>
              <span className="block text-xs font-medium text-gray-500 tracking-wider uppercase">Orphanage Management</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-rose-600 transition-colors">About Us</Link>
            <Link href="/donate" className="hover:text-rose-600 transition-colors">Donate</Link>
            <Link href="/dashboard" className="hover:text-rose-600 transition-colors">Dashboard</Link>
            <Link href="/contact" className="hover:text-rose-600 transition-colors">Contact</Link>
          </div>

          {/* Auth Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1.5">
              <LogIn className="w-4 h-4" /> Login
            </Link>
            <Link href="/signup" className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5">
              <User className="w-4 h-4" /> Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium hover:text-rose-600">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium hover:text-rose-600">About Us</Link>
          <Link href="/donate" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium hover:text-rose-600">Donate</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium hover:text-rose-600">Dashboard</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 font-medium hover:text-rose-600">Contact</Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-2.5 text-center font-semibold text-rose-600 border border-rose-200 rounded-xl">Login</Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full py-2.5 text-center font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl shadow-md">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}