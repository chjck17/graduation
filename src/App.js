import { useState, useEffect } from "react";
import "./App.css";
import Narbar from "./components/Narbar/Narbar";
import Home from "./components/Home/Home.jsx";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import BtnBackMenu from "./components/BtnBackScrollHome/BtnBackMenu";
function App() {
  const [isDesktop, setDesktop] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setDesktop({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (isDesktop.width <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [isDesktop]);

  return (
    <div
      className="relative overflow-y-auto overflow-x-hidden w-[100%] h-[100%]"
      id="header"
    >
      <Narbar isMobile={isMobile} />
      <Home />
      <Team />
      <Contact />
      <BtnBackMenu />
    </div>
  );
}

export default App;
