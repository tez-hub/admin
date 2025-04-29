import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    { name: 'Mon', users: 400 },
    { name: 'Tue', users: 600 },
    { name: 'Wed', users: 550 },
    { name: 'Thu', users: 700 },
    { name: 'Fri', users: 500 },
    { name: 'Sat', users: 300 },
    { name: 'Sun', users: 650 },
  ];
  
  const LineChartComponent = () => {
    return (
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md w-full">
        <h3 className="text-lg font-semibold mb-4">User Activity (Last 7 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
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
    );
  };
  
  export default LineChartComponent;
  