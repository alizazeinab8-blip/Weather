import type { WeatherData } from "../../assets/types/weather";
import { Sunrise, Sunset } from "lucide-react";
import { formatTime } from "../../assets/utils/formatTime";

interface SunTimesProps {
  weather: WeatherData;
}

const SunTimes = ({ weather }: SunTimesProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">

      <div className="rounded-xl bg-white/10 p-4 flex items-center gap-3">
        <Sunrise />

        <div>
          <p className="text-sm text-white/70">
            Sunrise
          </p>

          <p className="font-semibold">
            {formatTime(weather.sys.sunrise)}
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-white/10 p-4 flex items-center gap-3">
        <Sunset />

        <div>
          <p className="text-sm text-white/70">
            Sunset
          </p>

          <p className="font-semibold">
            {formatTime(weather.sys.sunset)}
          </p>
        </div>
      </div>

    </div>
  );
};

export default SunTimes;