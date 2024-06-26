"use client";


import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { 
  FileClock, 
  Home, 
  Settings, 
  WalletCards 
} from 'lucide-react';

import { cn } from '@/lib/utils';

export const SideNav = () => {

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history"
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing"
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings"
    },
  ];

  const path = usePathname();
  
  useEffect(() => {
    console.log(path)
  }, []);

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image
          src="/logo.svg"
          height={35}
          width={35}
          alt='AI Content Generator'
        />
      </div>
      <hr className='my-6 border' />
      <div className='mt-3'>
        {MenuList.map((menu, index) => (
          <div 
            className={
              cn('flex gap-2 mb-2 p-3 hover:bg-[#442781] hover:text-white rounded-lg  cursor-pointer items-center',
                  path === menu.path && 'bg-[#442781] text-white'
              )}
            key={index}
          >
            <menu.icon className='h-7 w-7' />
            <h2 className='text-lg'>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
