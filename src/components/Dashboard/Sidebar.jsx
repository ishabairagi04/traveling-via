// src/components/Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  SettingsIcon,
  CreditCardIcon,
  BookmarkIcon,
  HeadphonesIcon,
  LogOutIcon,
  TicketIcon
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <HomeIcon size={18} />, to: "/dashboard" },
  { name: "Settings", icon: <SettingsIcon size={18} />, to: "/settings" },
  { name: "Tickets", icon: <TicketIcon size={18} />, to: "/tickets" },
  { name: "Payment", icon: <CreditCardIcon size={18} />, to: "/payment" },
  { name: "Saved", icon: <BookmarkIcon size={18} />, to: "/saved" },
  { name: "Support", icon: <HeadphonesIcon size={18} />, to: "/support" },
  { name: "Logout", icon: <LogOutIcon size={18} />, to: "/logout" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-6 text-2xl font-bold text-gray-800 tracking-tight px-2">
        Xohani
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition 
              ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"}`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
