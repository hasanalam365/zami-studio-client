import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import WhatsAppWidget from "../../Components/WhatsAppWidget";
import ScrollToTop from "../../Components/ScrollToTop";

import "./cursor.css";

const MainLayout = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setTrail((prev) => {
        const updated = [...prev, { x, y, id: Math.random() }];
        return updated.slice(-15);
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isLargeScreen]);

  return (
    <div
      className="relative w-full overflow-x-hidden"
      style={{ cursor: isLargeScreen ? "none" : "auto" }}
    >
      <ScrollToTop />

      <div className="h-16">
        <Navbar />
      </div>

      <div className="min-h-[calc(100vh-204px)]">
        <Outlet />
      </div>

      <Footer />

      {isLargeScreen &&
        trail.map((dot) => (
          <span
            key={dot.id}
            className="cursor-bubble"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
            }}
          />
        ))}

      <WhatsAppWidget />
    </div>
  );
};

export default MainLayout;
