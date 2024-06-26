export interface WeatherData {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  id: number
  name: string
  cod: number
  dt_txt: string
}

export interface CityWeather {
  name: string
  tempMin: number
  tempMax: number
}
