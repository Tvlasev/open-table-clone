"use client";

import { useState, FC } from "react";
import { useRouter } from "next/navigation";

const SearchBar: FC = () => {
  const [location, setLocation] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (location === "") {
      return;
    }

    router.push(`/search?city=${location}`);
    setLocation("");
  };

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button
        onClick={handleSearch}
        className="rounded bg-red-600 px-9 py-2 text-white"
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
