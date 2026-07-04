interface FavoritesProps {
  cities: string[];
  onSelect: (city: string) => void;
}

const Favorites = ({
  cities,
  onSelect,
}: FavoritesProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => onSelect(city)}
          className="
            rounded-full
            bg-white/20
            px-4
            py-2
            text-white
            backdrop-blur
            hover:bg-white/30
            transition
          "
        >
          ⭐ {city}
        </button>
      ))}
    </div>
  );
};

export default Favorites;