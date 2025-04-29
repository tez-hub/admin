import { Home, Users, BarChart, Settings, LogOut } from 'lucide-react';

const AdminNav = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Admin Dashboard
      </div>
      {/* Scrollable nav area */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <NavItem icon={<Home />} label="Dashboard" />
        <NavItem icon={<Users />} label="Users" />
        <NavItem icon={<BarChart />} label="Reports" />
        {Array.from({ length: 10 }).map((_, idx) => (
          <NavItem key={idx} icon={<Settings />} label={`Settings ${idx + 1}`} />
        ))}
      </nav>
      {/* Always visible logout button */}
      <div className="p-4 border-t border-gray-700">
        <NavItem icon={<LogOut />} label="Logout" />
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition">
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </div>
);

export default AdminNav;
