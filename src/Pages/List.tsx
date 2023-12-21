import React from 'react'
import Header from '../Components/Header'
import { IoMdSearch } from "react-icons/io";
import { employeeData } from '../Data/data';

type Props = {}

const List = (props: Props) => {
    const [search, setSearch] = React.useState('')
    const regex = new RegExp(search, 'gi')
  return (
    <div className='pt-10'>
        <Header/>
        <div className='flex h-[55px] items-center py-4 px-5 bg-[#141615] mt-5 rounded-[16px]'>
            <input value={search} onChange={e=>setSearch(e.target.value)} type="text " className='grow text-white bg-transparent placeholder:text-center px-4 py-2 focus:border-none active:border-none focus:outline-none active:border-none' placeholder='Search with name' />
            <IoMdSearch className='h-6 w-6 text-white'/>
        </div>
        <div className='flex flex-col mt-5 gap-4'>
            {
                employeeData.filter(employee => regex.test(employee.name)||regex.test(employee.role)).map((item, index) => (
                    <div className={`p-4 relative bg-[#131816] w-[95%] rounded-[10px] ${index%2==0?"":'self-end'}`}>
                <div className="absolute right-[30px] rounded-full border-black text-white flex justify-center items-center border p-2 h-6 w-6">
                    {item.emp_id}
                </div>
                <div className='grid grid-cols-4 gap-y-4 text-white'>
                    <div className='col-span-1'>
                        EMP ID
                    </div>
                    <div className='col-span-3'>
                        : &nbsp;&nbsp;&nbsp;&nbsp;{item.emp_id}
                    </div>
                    <div className='col-span-1'>
                        Name
                    </div>
                    <div className='col-span-3'>
                        : &nbsp;&nbsp;&nbsp;&nbsp;{item.name}
                    </div>
                    <div className='col-span-1'>
                        DOB
                    </div>
                    <div className='col-span-3 text-[#85591D]'>
                        : &nbsp;&nbsp;&nbsp;&nbsp;{item.dob}
                    </div>
                    <div className='col-span-1'>
                        Role
                    </div>
                    <div className='col-span-3 text-[#2C7C38]'>
                        : &nbsp;&nbsp;&nbsp;&nbsp;{item.role}
                    </div>
                </div>
            </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default List