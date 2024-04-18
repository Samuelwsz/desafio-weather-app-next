"use client"

import Loading from "@/app/loading"
import { UseTemperatureOfCapitals } from "@/lib/useTemperatureOfCapitals"

export function TemperatureOfCapitals() {
  const { cityWeathers, loading } = UseTemperatureOfCapitals()

  return (
    <div className="max-w-xl mx-auto pb-5">
      <h1 className="text-3xl text-center font-bold mb-4 text-slate-200">
        Capitais
      </h1>
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="flex justify-center m-auto">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Mín</th>
                  <th className="px-4 py-2">Máx</th>
                </tr>
              </thead>

              <tbody>
                {cityWeathers.map((cityWeather) => (
                  <tr key={cityWeather.name}>
                    <td className="px-4 py-2 font-medium">
                      {cityWeather.tempMin.toFixed(0)}°C
                    </td>
                    <td className="px-4 py-2 font-medium">
                      {cityWeather.tempMax.toFixed(0)}°C
                    </td>
                    <td className="px-4 py-2 font-medium">
                      {cityWeather.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
