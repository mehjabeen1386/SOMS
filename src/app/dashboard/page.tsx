

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardStats from '../../components/DashboardStats';
import ChildrenTable, { Child } from '../../components/ChildrenTable';
import { ShieldCheck } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [children, setChildren] = useState<Child[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const isAuth = localStorage.getItem('isAuthenticated');

    if (!isAuth) {
      router.push('/login');
      return;
    }

    fetchChildren();
  }, [router]);

  async function fetchChildren() {
    try {
      const res = await fetch('/api/children');
      const data = await res.json();

      if (Array.isArray(data)) {
        setChildren(data);
      }
    } catch (error) {
      console.error('Failed to fetch children', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-rose-600 text-sm font-semibold mb-1">
            <ShieldCheck className="w-4 h-4" />
            OMS Admin Portal
          </div>

          <h1 className="text-3xl font-black text-slate-900">
            Orphanage Management Dashboard
          </h1>

          <p className="text-slate-500 text-sm">
            Manage children records, monitor welfare metrics, and update
            database entries.
          </p>
        </div>
      </div>

      <DashboardStats children={children} />

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Children Records
        </h2>

        <ChildrenTable
          children={children}
          onRefresh={fetchChildren}
        />
      </div>
    </div>
  );
}

