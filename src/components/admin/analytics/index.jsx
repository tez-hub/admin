import { Users, DollarSign, Activity, BarChart } from 'lucide-react';

const AnalyticsCards = () => {
  const stats = [
    { title: 'Total Users', value: '1,245', icon: <Users size={28} />, color: 'bg-blue-100 text-blue-600' },
    { title: 'Revenue', value: '$32,000', icon: <DollarSign size={28} />, color: 'bg-green-100 text-green-600' },
    { title: 'Active Sessions', value: '523', icon: <Activity size={28} />, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Reports Generated', value: '78', icon: <BarChart size={28} />, color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-5 border border-gray-100"
        >
          <div className={`p-4 rounded-xl ${stat.color} flex items-center justify-center`}>
            {stat.icon}
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">{stat.title}</div>
            <div className="text-2xl font-semibold text-gray-800">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
