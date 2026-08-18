
import { Child } from './ChildrenTable';
import { Users, UserCheck, Mars, Venus } from 'lucide-react';

type DashboardStatsProps = {
  children: Child[];
};

export default function DashboardStats({ children = [] }: DashboardStatsProps) {
  const totalChildren = children.length;
  const activeChildren = children.filter((c) => c.status === 'Active').length;
  const maleCount = children.filter((c) => c.gender === 'Male').length;
  const femaleCount = children.filter((c) => c.gender === 'Female').length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Children */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Total Children</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{totalChildren}</h3>
        </div>
        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          <Users className="w-6 h-6" />
        </div>
      </div>

      {/* Active Children */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Active Children</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeChildren}</h3>
        </div>
        <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
          <UserCheck className="w-6 h-6" />
        </div>
      </div>

      {/* Male Count */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Male</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{maleCount}</h3>
        </div>
        <div className="rounded-xl bg-sky-50 p-3 text-sky-600">
          <Mars className="w-6 h-6" />
        </div>
      </div>

      {/* Female Count */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Female</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{femaleCount}</h3>
        </div>
        <div className="rounded-xl bg-pink-50 p-3 text-pink-600">
          <Venus className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}