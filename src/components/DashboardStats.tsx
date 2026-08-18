type DashboardStatsProps = {
  total: number;
  active: number;
  male: number;
  female: number;
};

export default function DashboardStats({
  total,
  active,
  male,
  female
}: DashboardStatsProps) {
  const stats = [
    {
      title: 'Total Children',
      value: total
    },
    {
      title: 'Active Children',
      value: active
    },
    {
      title: 'Male',
      value: male
    },
    {
      title: 'Female',
      value: female
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
        >
          <p className="text-sm font-medium text-slate-500">
            {stat.title}
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}