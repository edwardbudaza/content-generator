import { Search } from 'lucide-react';

export const Header = () => {
  return (
    <div 
      className='flex p-5 shadow-sm border-b-2 bg-white justify-between 
    items-center
    '>
      <div 
        className='flex gap-2 items-center 
      p-2 border rounded-md max-w-lg bg-white
      '>
        <Search />
        <input type="text" placeholder='Search...' 
          className='outline-none'
        />
      </div>
      <div>
        <h2 
          className='bg-[#442781] p-1 rounded-full 
        text-xs text-white justify-center items-center
        '>
          🔥Join Memberships just for $9.99/Month
        </h2>
      </div>
    </div>
  );
};

