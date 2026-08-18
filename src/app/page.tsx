'use client';

import { useEffect, useState } from 'react';
import ChildrenTable, { Child } from '../components/ChildrenTable';
import DashboardStats from '../components/DashboardStats';
export default function HomePage() {
  const [children, setChildren] = useState<Child[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadChildren() {
    try {
      setError('');

      const response = await fetch('/api/children');

      if (!response.ok) {
        throw new Error('Failed to load children');
      }

      const data = await response.json();
      setChildren(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Failed to load data'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadChildren();
  }, []);

  const active = children.filter(
    (child) => child.status === 'Active'
  ).length;

  const male = children.filter(
    (child) => child.gender === 'Male'
  ).length;

  const female = children.filter(
    (child) => child.gender === 'Female'
  ).length;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            OMS Dashboard
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Orphanage Management System
          </h1>

          <p className="mt-2 text-slate-600">
            Manage children and monitor basic orphanage records.
          </p>
        </header>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        <DashboardStats
          total={children.length}
          active={active}
          male={male}
          female={female}
        />

        <section className="mt-8">
          {loading ? (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              Loading children...
            </div>
          ) : (
            <ChildrenTable
              children={children}
              onRefresh={loadChildren}
            />
          )}
        </section>
      </div>
    </main>
  );
}