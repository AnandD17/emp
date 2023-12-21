import React from 'react'

type Props = {
    children: React.ReactNode
}

const MobileLayout = (props: Props) => {
  return (
    <div className='min-h-[100vh] max-w-[600px] mx-auto bg-[#000201] flex flex-col'>
        <div className='grow overflow-y-auto'>
            {props.children}
        </div>
        <div className='h-[64px] bg-[#0F2423] rounded-t-[20px] flex justify-around items-center'>
            <div className='h-5 w-5 bg-[red]'></div>
            <div className='h-5 w-5 bg-[red]'></div>
        </div>
    </div>
  )
}

export default MobileLayout