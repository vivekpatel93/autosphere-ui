import React from "react";
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "@remixicon/react";

function Footer() {
  return (
    <footer className="bg-[#465697] text-white flex flex-col">
      
      {/* Top Section */}
      <div className="flex flex-wrap justify-around items-center p-10 md:p-12 gap-8">
        
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h2>

          <div className="flex items-center gap-3 text-lg mb-1">
            <RiMapPinLine size={25} />
            <span>India</span>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <RiPhoneLine size={25} />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <RiMailLine size={25} />
            <span>support@autosphere.com</span>
          </div>
        </div>

        {/* <div className="max-w-md text-center md:text-left">
          <p className="text-base leading-relaxed">
            AutoSphere is a modern car dealership platform that helps customers
            explore, compare, and purchase vehicles with ease. From new launches
            to trusted pre-owned cars, AutoSphere connects you with the perfect drive.
          </p>
        </div> */}
        <div className="max-w-md text-center md:text-left 
                text-sm md:text-base 
                text-white/90 
                leading-relaxed 
                transition-all duration-300 
                hover:text-white 
                hover:scale-[1.02]">
  <p>
    “AutoSphere helps customers explore, compare, and buy new or pre-owned cars easily, connecting them with the perfect driving experience.”
  </p>
</div>


      </div>

      {/* Bottom Section (Single Line) */}
      <div className="border-t border-white/30 py-4">
        <p className="text-center text-sm font-bold">
          © 2026 AutoSphere. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
