import React from 'react'
import {MdPerson} from 'react-icons/md'
import { FaHouse } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
};

const MobileLayout = (props: Props) => {
  return (
    <div className='min-h-[100vh] max-w-[600px] mx-auto bg-[#000201] flex flex-col'>
        <div className='grow overflow-y-auto px-5'>
            {props.children}
        </div>
        <div className='h-[64px] bg-[#0F2423] rounded-t-[20px] flex justify-around items-center'>
            
                <FaHouse  className='w-[40px] h-[40px] text-[#236435] cursor-pointer' />
                <MdPerson  className='w-[40px] h-[40px] text-[#236435] cursor-pointer'/>
        </div>
    </div>
  );
};

export default MobileLayout;
