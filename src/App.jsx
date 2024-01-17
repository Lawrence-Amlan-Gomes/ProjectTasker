import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import TaskBoard from "./Components/TaskBoard";

export default function App() {
  return (
    <div>
      <body className="bg-[#191D26] font-[Inter] text-white">
        <Header />
        <div className="flex flex-col items-center justify-center">
          <HeroSection />
          <TaskBoard />
        </div>
        <Footer />
      </body>
    </div>
  );
}
