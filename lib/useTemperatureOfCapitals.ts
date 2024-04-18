import { CityWeather } from "@/app/interface"
import axios from "axios"
import { useEffect, useState } from "react"

export const UseTemperatureOfCapitals = () => {
  const [cityWeathers, setCityWeathers] = useState<CityWeather[]>([])
  const [loading, setLoading] = useState(true)

  const API_KEY = "0e4ba8942e36e6085c2a1a3f1406d6c6"

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cities = [
        "Brasilia",
        "São Paulo",
        "Rio de Janeiro",
        "Salvador",
        "Fortaleza",
        "Belo Horizonte",
        "Manaus",
        "Curitiba",
        "Recife",
        "Porto Alegre",
        "Belém",
        "Goiânia",
        "Guarulhos",
        "Campinas",
        "São Luís",
        "São Gonçalo",
        "Maceió",
        "Duque de Caxias",
        "Nova Iguaçu",
        "Natal",
      ]
      const cityData: CityWeather[] = []

      for (const city of cities) {
        try {
          setLoading(true)

          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${API_KEY}&units=metric`
          )
          const tempMin = response.data.main.temp_min
          const tempMax = response.data.main.temp_max
          cityData.push({ name: city, tempMin, tempMax })
        } catch (error: any) {
          console.error(`Erro ao buscar dados para ${city}: ${error.message}`)
        } finally {
          setLoading(false)
        }
      }

      setCityWeathers(cityData)
    }

    fetchWeatherData()
  }, [])

  return { cityWeathers ,loading}
}
