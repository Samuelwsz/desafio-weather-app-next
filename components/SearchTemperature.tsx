"use client"

import { UseSearchTemperature } from "@/lib/useSearchTemperature"
import { Search } from "lucide-react"
import { Card } from "./Card"

export function SearchTemperature() {
  const {
    error,
    groupForecastsByDay,
    handleClose,
    handleSearch,
    open,
    weatherData,
    forecast,
    city,
    setCity,
  } = UseSearchTemperature()

  return (
    <div className="flex flex-col justify-center items-center my-10">
      {open ? (
        <div className="mb-10">
          {weatherData && (
            <>
              <Card
                weatherData={weatherData}
                forecast={forecast}
                groupForecastsByDay={groupForecastsByDay}
                handleClose={handleClose}
              />
            </>
          )}

          {error && (
            <p className="text-slate-800 font-medium text-lg">
              Ocorreu um erro ao buscar os dados meteorológicos
            </p>
          )}
        </div>
      ) : null}

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Insira aqui o nome da cidade"
          className="p-2 pr-10 outline-none w-[430px]"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          disabled={city.length === 0}
          onClick={handleSearch}
          className="absolute right-3 cursor-pointer disabled:cursor-auto"
        >
          <Search className="size-5" />
        </button>
      </div>
    </div>
  )
}
