// 'use client';

// import { useEffect, useState } from 'react';
// import ChildrenTable, { Child } from '../components/ChildrenTable';
// import DashboardStats from '../components/DashboardStats';
// export default function HomePage() {
//   const [children, setChildren] = useState<Child[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   async function loadChildren() {
//     try {
//       setError('');

//       const response = await fetch('/api/children');

//       if (!response.ok) {
//         throw new Error('Failed to load children');
//       }

//       const data = await response.json();
//       setChildren(data);
//     } catch (error) {
//       setError(
//         error instanceof Error
//           ? error.message
//           : 'Failed to load data'
//       );
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     loadChildren();
//   }, []);

//   const active = children.filter(
//     (child) => child.status === 'Active'
//   ).length;

//   const male = children.filter(
//     (child) => child.gender === 'Male'
//   ).length;

//   const female = children.filter(
//     (child) => child.gender === 'Female'
//   ).length;

//   return (
//     <main className="min-h-screen">
//       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <header className="mb-8">
//           <p className="text-sm font-medium text-slate-500">
//             OMS Dashboard
//           </p>

//           <h1 className="mt-1 text-3xl font-bold tracking-tight">
//             Orphanage Management System
//           </h1>

//           <p className="mt-2 text-slate-600">
//             Manage children and monitor basic orphanage records.
//           </p>
//         </header>

//         {error && (
//           <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
//             {error}
//           </div>
//         )}

//         <DashboardStats
//           total={children.length}
//           active={active}
//           male={male}
//           female={female}
//         />

//         <section className="mt-8">
//           {loading ? (
//             <div className="rounded-xl bg-white p-8 text-center shadow-sm">
//               Loading children...
//             </div>
//           ) : (
//             <ChildrenTable
//               children={children}
//               onRefresh={loadChildren}
//             />
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }

import Link from 'next/link';
import { Heart, ShieldCheck, Users, Sparkles, ArrowRight, Award, Smile } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-rose-50/60 via-pink-50/30 to-white">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" /> Transforming Lives Every Single Day
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Giving Every Child a <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">Brighter Future</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to HopeHaven — a state-of-the-art orphanage management platform ensuring holistic child development, care tracking, and compassionate support.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-lg shadow-xl shadow-rose-500/30 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              Launch OMS Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/donate" className="px-8 py-4 rounded-2xl bg-white text-rose-600 border-2 border-rose-200 font-bold text-lg hover:bg-rose-50 transition-all flex items-center justify-center gap-2 shadow-sm">
              Sponsor a Child <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="py-16 bg-white border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-3xl bg-rose-50/50 border border-rose-100">
            <div className="text-4xl lg:text-5xl font-black text-rose-600 mb-2">150+</div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Children Sheltered</div>
          </div>
          <div className="p-6 rounded-3xl bg-amber-50/50 border border-amber-100">
            <div className="text-4xl lg:text-5xl font-black text-amber-600 mb-2">98%</div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Education Rate</div>
          </div>
          <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100">
            <div className="text-4xl lg:text-5xl font-black text-emerald-600 mb-2">300+</div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Active Donors</div>
          </div>
          <div className="p-6 rounded-3xl bg-purple-50/50 border border-purple-100">
            <div className="text-4xl lg:text-5xl font-black text-purple-600 mb-2">12 Yrs</div>
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Of Dedicated Service</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Care & Management</h2>
            <p className="text-slate-600 text-lg">Designed with advanced features to streamline daily operations and foster a loving environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:border-rose-200 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Records</h3>
              <p className="text-slate-600 leading-relaxed">
                Maintain accurate child profiles, guardian details, health records, and milestone tracking securely in real-time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:border-amber-200 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Community & Volunteers</h3>
              <p className="text-slate-600 leading-relaxed">
                Coordinate with volunteers, donors, and social workers seamlessly through dedicated role-based portals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:border-emerald-200 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smile className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Holistic Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Track educational progress, extracurricular achievements, and medical checkups for every child under our care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}