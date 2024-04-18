import { WeatherData } from "@/app/interface"
import axios from "axios"
import { useEffect, useState } from "react"

export const UseSearchTemperature = () => {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<WeatherData[]>([])
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false)

  const API_KEY = "0e4ba8942e36e6085c2a1a3f1406d6c6"

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      setWeatherData(response.data)
      setError(null)
    } catch (error: any) {
      setError(error)
      setWeatherData(null)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        )
        setForecast(response.data.list)
      } catch (error) {
        console.error("Erro ao buscar previsão do tempo:", error)
      }
    }

    fetchData()
  }, [city])

  const groupForecastsByDay = () => {
    const groupedForecasts: { [key: string]: WeatherData } = {}

    forecast.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]
      if (!groupedForecasts[date]) {
        groupedForecasts[date] = item
      }
    })

    return Object.values(groupedForecasts)
  }

  const handleSearch = () => {
    fetchWeatherData()
    setOpen(true)
    setCity("")
  }

  const handleClose = () => {
    setOpen(false)
    setWeatherData(null)
  }

  return {
    handleClose,
    handleSearch,
    groupForecastsByDay,
    weatherData,
    error,
    open,
    forecast,
    city,
    setCity,
  }
}
