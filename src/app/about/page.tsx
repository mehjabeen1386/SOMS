import { Heart, Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-600 font-bold tracking-wider uppercase text-sm bg-rose-100 px-4 py-1.5 rounded-full">About HopeHaven</span>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-6">Dedicated to Compassion & Excellence</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            HopeHaven was founded with a singular vision: to create a safe, nurturing, and empowering sanctuary for orphaned children where they can grow into confident, independent leaders.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-8 lg:p-10 rounded-3xl shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-rose-100 leading-relaxed text-lg">
              To provide comprehensive shelter, nutritious meals, quality education, emotional support, and career guidance to every child, empowering them to break the cycle of hardship.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 lg:p-10 rounded-3xl shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-amber-100 leading-relaxed text-lg">
              A world where every child regardless of background has equal access to love, opportunity, and education, enabling them to fulfill their utmost potential.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Core Values That Guide Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-8 h-8 text-rose-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-lg mb-1">Unconditional Love</h3>
              <p className="text-slate-600 text-sm">Treating every child as our own family member.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-8 h-8 text-rose-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-lg mb-1">Transparency</h3>
              <p className="text-slate-600 text-sm">Full accountability in records, funds, and operations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-8 h-8 text-rose-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-lg mb-1">Excellence</h3>
              <p className="text-slate-600 text-sm">High standards in education, health, and well-being.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-8 h-8 text-rose-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-lg mb-1">Empowerment</h3>
              <p className="text-slate-600 text-sm">Equipping children with life and vocational skills.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}