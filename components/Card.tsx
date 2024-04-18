import { WeatherData } from "@/app/interface"
import { translateMeteorologicalTerm } from "@/lib/translateMeteorologicalTerm"
import { format } from "date-fns"
import { ArrowDown, ArrowUp, X } from "lucide-react"

interface CardProps {
  weatherData: WeatherData
  handleClose: () => void
  groupForecastsByDay: () => WeatherData[]
  forecast: WeatherData[]
}

export function Card({
  weatherData,
  handleClose,
  groupForecastsByDay,
  forecast,
}: CardProps) {
  return (
    <div className="w-[430px] mt-3 bg-white py-1 px-8">
      <div className="mt-2 flex justify-between">
        <h3>{`${weatherData.name} - ${weatherData.sys.country}`}</h3>
        <X
          onClick={handleClose}
          className="text-red-600 hover:text-red-400 cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-3xl my-2">
          {`${weatherData.main.temp.toFixed(
            0
          )}°C - ${translateMeteorologicalTerm(
            weatherData.weather[0].description
          )}`}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p className="flex gap-1 items-center">
            <ArrowUp className="size-5 text-orange-500" />
            {weatherData.main.temp_max.toFixed(0)}°C
          </p>
          <p className="flex gap-1 items-center">
            <ArrowDown className="size-5 text-orange-500" />
            {weatherData.main.temp_min.toFixed(0)}°C
          </p>
        </div>
        <div>Sensação: {weatherData.main.feels_like.toFixed(0)}°C</div>
      </div>
      <div className="flex justify-between my-2">
        <p>Vento: {weatherData.wind.speed.toFixed(1)}km/h</p>
        <p>Umidade: {weatherData.main.humidity}%</p>
      </div>
      <div className="border-t border-orange-500 my-4 w-[370px] flex m-auto" />
      <div>
        {forecast && forecast.length > 0 && (
          <ul className="flex gap-3 text-center justify-center">
            {groupForecastsByDay().map((item) => (
              <li key={item.id}>
                <p>{format(new Date(item.dt_txt), "dd-MM")}</p>
                <p className="text-orange-600 font-medium">
                  {item.main.temp.toFixed(0)}°C
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
