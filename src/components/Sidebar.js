import React from "react";
import {
  Home,
  Sparkles,
  PlaySquare,
  User,
  History,
  List,
  Video,
  Clock,
  ThumbsUp,
  TrendingUp,
  ShoppingBag,
  Music,
  Clapperboard,
  Radio,
  Gamepad2,
  Newspaper,
  Settings,
  Flag,
  HelpCircle,
  MessageCircle,
  Trophy,
  Podcast,
} from "lucide-react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const menuItems = [
    {
      title: "Home",
      icon: <Home size={22} />,
    },
    {
      title: "Shorts",
      icon: <Sparkles size={22} />,
    },
    {
      title: "Subscriptions",
      icon: <PlaySquare size={22} />,
    },
  ];

  const youSection = [
    { title: "Your Channel", icon: <User size={22} /> },
    { title: "History", icon: <History size={22} /> },
    { title: "Playlists", icon: <List size={22} /> },
    { title: "Your Videos", icon: <Video size={22} /> },
    { title: "Watch Later", icon: <Clock size={22} /> },
    { title: "Liked Videos", icon: <ThumbsUp size={22} /> },
  ];

  const explore = [
    { title: "Trending", icon: <TrendingUp size={22} /> },
    { title: "Shopping", icon: <ShoppingBag size={22} /> },
    { title: "Music", icon: <Music size={22} /> },
    { title: "Movies", icon: <Clapperboard size={22} /> },
    { title: "Live", icon: <Radio size={22} /> },
    { title: "Gaming", icon: <Gamepad2 size={22} /> },
    { title: "News", icon: <Newspaper size={22} /> },
    { title: "Sports", icon: <Trophy size={22} /> },
    { title: "Podcasts", icon: <Podcast size={22} /> },
  ];

  const settings = [
    { title: "Settings", icon: <Settings size={22} /> },
    { title: "Report History", icon: <Flag size={22} /> },
    { title: "Help", icon: <HelpCircle size={22} /> },
    { title: "Send Feedback", icon: <MessageCircle size={22} /> },
  ];

  if (!isMenuOpen) {
    return (
      <div className="w-20 h-screen border-r border-gray-200 p-3 text-xs">
        <MiniSidebar icon={<Home size={22} />} label="Home" />
        <MiniSidebar icon={<Sparkles size={22} />} label="Shorts" />
        <MiniSidebar icon={<PlaySquare size={22} />} label="Subs" />
        <MiniSidebar icon={<History size={22} />} label="History" />
      </div>
    );
  }

  return (
    <div className="w-60 h-screen overflow-y-auto p-3 border-r border-gray-200 text-sm">
      {/* SECTION 1 */}
      <div className="pb-4 border-b border-gray-200">
        {menuItems.map((item) => (
          <SidebarRow key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>

      {/* SECTION 2 */}
      <div className="py-4 border-b border-gray-200">
        <p className="px-3 pb-2 text-xs uppercase text-gray-500">You</p>
        {youSection.map((item) => (
          <SidebarRow key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>

      {/* SECTION 3 */}
      <div className="py-4 border-b border-gray-200">
        <p className="px-3 pb-2 text-xs uppercase text-gray-500">Explore</p>
        {explore.map((item) => (
          <SidebarRow key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>

      {/* SECTION 4 */}
      <div className="py-4">
        {settings.map((item) => (
          <SidebarRow key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

const SidebarRow = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition">
      <span className="text-black">{icon}</span>
      <span className="text-gray-800">{title}</span>
    </div>
  );
};

const MiniSidebar = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-1 py-4 cursor-pointer hover:bg-gray-200 rounded-lg">
      <span>{icon}</span>
      <span className="text-[10px] text-gray-700">{label}</span>
    </div>
  );
};

export default Sidebar;
