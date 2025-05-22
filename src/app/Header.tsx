import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#f5f5dc] py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-[#6b4f27]">Jamia Rizvia Trust</div>
        <ul className="flex gap-6 text-[#6b4f27] font-semibold text-lg">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#books" className="hover:underline">Books</a></li>
          <li><a href="#history" className="hover:underline">History</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
        <button className="ml-4 bg-[#e0c187] text-[#6b4f27] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#e8d3a1] transition cursor-pointer">Donate Now</button>
      </nav>
    </header>
  );
};

export default Header;
