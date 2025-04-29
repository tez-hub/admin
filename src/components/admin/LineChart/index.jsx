import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

const data7Days = [
  { name: 'Mon', users: 400 },
  { name: 'Tue', users: 600 },
  { name: 'Wed', users: 550 },
  { name: 'Thu', users: 700 },
  { name: 'Fri', users: 500 },
  { name: 'Sat', users: 300 },
  { name: 'Sun', users: 650 },
];

const data30Days = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  users: Math.floor(Math.random() * 700) + 200,
}));

const LineChartComponent = () => {
  const [filter, setFilter] = useState('7days');

  const chartData = filter === '7days' ? data7Days : data30Days;

  return (
    <div className="mt-10 bg-white p-6 rounded-2xl shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">User Activity</h3>
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              filter === '7days'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('7days')}
          >
            7 Days
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              filter === '30days'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFilter('30days')}
          >
            30 Days
          </button>
        </div>
      </div>
      <div className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;
