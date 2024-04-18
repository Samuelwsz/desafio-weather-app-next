import { SearchTemperature } from "@/components/SearchTemperature"
import { TemperatureOfCapitals } from "@/components/TemperatureOfCapitals"

export default function Home() {
  return (
    <main className="">
      <h1 className="text-5xl font-semibold text-center pt-16 text-slate-200">
        Previsao do tempo
      </h1>
      <SearchTemperature />

      <div className="border-t border-slate-300 my-4 sm:w-[500px] flex m-auto" />

      <TemperatureOfCapitals />
    </main>
  )
}
