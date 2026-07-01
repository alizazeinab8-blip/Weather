import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city.trim());

    setCity("");
  };

  return (
    <form className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="
            w-full
            rounded-xl
            border-none
            bg-white/20
            backdrop-blur
            px-5
            py-3
            text-white
            placeholder:text-white/60
            outline-none
            focus:ring-2
            focus:ring-white
            "
      />

      <button
        type="submit"
      className="
rounded-xl
bg-white
px-5
text-blue-700
font-semibold
hover:scale-105
transition
"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;