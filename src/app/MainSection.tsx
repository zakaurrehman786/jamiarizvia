import React from "react";

const MainSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex-1 flex items-center justify-center bg-cover bg-center min-h-[600px]"
      style={{
        backgroundImage: "url('/mosque-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#f5f5dc]/70" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#6b4f27] drop-shadow mb-4">
          Welcome to Jamia Rizvia Trust
        </h1>
        <p className="text-lg sm:text-2xl text-[#6b4f27] mb-6 max-w-2xl">
          Spreading the Light of the Holy Quran & Sunnah to Inspire Generations
        </p>
        <a
          href="#about"
          className="inline-block bg-[#e0c187] text-[#6b4f27] px-6 py-3 rounded-full font-semibold shadow hover:bg-[#e8d3a1] transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default MainSection;
