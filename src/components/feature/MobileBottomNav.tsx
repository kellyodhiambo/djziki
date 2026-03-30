import { Link, useLocation } from "react-router-dom";

const mobileNavItems = [
  { label: "Home", path: "/", icon: "ri-home-5-line", activeIcon: "ri-home-5-fill" },
  { label: "About", path: "/about", icon: "ri-user-line", activeIcon: "ri-user-fill" },
  { label: "Mixes", path: "/mixes", icon: "ri-video-line", activeIcon: "ri-video-fill" },
  { label: "Gallery", path: "/gallery", icon: "ri-image-2-line", activeIcon: "ri-image-2-fill" },
  { label: "Social", path: "/social", icon: "ri-share-line", activeIcon: "ri-share-fill" },
  { label: "Book", path: "/booking", icon: "ri-calendar-check-line", activeIcon: "ri-calendar-check-fill" },
];

const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-xl border-t border-black/[0.07] pb-safe">
      <div className="flex items-stretch">
        {mobileNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 relative transition-all duration-200 cursor-pointer ${
                isActive ? "text-ziki-gold" : "text-gray-400 active:text-ziki-gold"
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`${isActive ? item.activeIcon : item.icon} text-[18px]`} />
              </div>
              <span
                className={`font-heading font-700 text-[9px] uppercase tracking-wider leading-none ${
                  isActive ? "text-ziki-gold" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-gradient-to-r from-ziki-gold to-ziki-purple" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
