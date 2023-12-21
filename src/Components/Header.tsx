import React from "react";
import contactImg from "../assets/contact.png";
import homeLogo from "../assets/homeLogo.png";
type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="flex justify-end">
        <img src={contactImg} className="w-[40px]" alt="" />
      </div>
      <div className="flex justify-center mt-10">
        <div className="relative">
          <img src={homeLogo} className="w-[70px]" alt="" />
          <div style={{boxShadow:'inset 0px 4px 0px #00000040;'}} className="absolute top-[-25px] right-[-25px] bg-[#5E5E5EB5] rounded-full flex items-center justify-center h-9 w-9 text-[#36A546]">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
