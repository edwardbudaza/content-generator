import { Search } from "lucide-react";

export const SearchSection = ({onSearchInput}:any) => {
  return (
    <div 
        className="flex flex-col p-10 bg-gradient-to-tr 
        from-[#A992DB] via-[#61459C] to-[#442781]
        items-center justify-center text-white
    ">
        <h2 className="text-3xl font-bold">Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <div className="flex w-full justify-center">
            <div className="flex gap-2 items-center 
            p-2 border rounded-md bg-white my-5 w-[50%]">
                <Search className="text-primary" />
                <input type="text" placeholder="Search"
                    onChange={(event) => onSearchInput(event.target.value)}
                    className="bg-transparent w-full outline-none text-gray-700"
                />
            </div>
        </div>
    </div>
  );
};
