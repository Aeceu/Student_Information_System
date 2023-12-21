import { Dispatch, SetStateAction } from "react";
import { LuSearch } from "react-icons/lu";

type TSearchTab = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const SearchTab = ({ search, setSearch }: TSearchTab) => {
  return (
    <form className="h-[70px] px-4 flex items-center gap-2 w-full text-slate-950">
      <span className="w-full p-2 rounded-sm border border-red-500 flex items-center gap-2 ">
        <LuSearch className="text-red-500" />
        <input
          className="text-xs outline-none w-full"
          placeholder="search for student number...."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
    </form>
  );
};
export default SearchTab;
