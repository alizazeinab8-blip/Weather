export const getBackground = (weather: string): string => {
  switch (weather) {
    case "Clear":
      return "bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400";

    case "Clouds":
      return "bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700";

    case "Rain":
      return "bg-gradient-to-br from-blue-400 via-blue-700 to-slate-900";

    case "Snow":
      return "bg-gradient-to-br from-slate-100 via-sky-200 to-blue-300";

    case "Thunderstorm":
      return "bg-gradient-to-br from-gray-800 via-slate-900 to-black";

    default:
      return "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700";
  }
};