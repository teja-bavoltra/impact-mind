export default function Sidebar() {
  const items = [
    "Dashboard",
    "Districts",
    "Schools",
    "Students",
    "AI Assessment",
    "Recommendations",
    "Campaigns",
    "Tutors",
    "Reports",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">BAVOLTRA</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="text-gray-700 hover:text-blue-600 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
