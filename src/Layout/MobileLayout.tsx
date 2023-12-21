import React from "react";
import { MdPerson } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  noFooter?: boolean;
};

const MobileLayout = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100vh] max-h-[100vh] max-w-[600px] mx-auto bg-[#000201] flex flex-col">
      <div className="grow overflow-y-auto px-5">{props.children}</div>
      {props?.noFooter ? null : (
        <div className="h-[64px] py-[20px] bg-[#0F2423] rounded-t-[20px] flex justify-around items-center">
          <div
            onClick={() => {
              navigate("/home");
            }}
            className="w-[28px] h-[30px] cursor-pointer"
          >
            <FaHouse className="w-[28px] h-[30px] text-[#236435] cursor-pointer" />
          </div>
          <div
            onClick={() => {
              navigate("/list");
            }}
            className="w-[28px] h-[40px] cursor-pointer"
          >
          <MdPerson className="w-[28px] h-[40px] text-[#236435] cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileLayout;
