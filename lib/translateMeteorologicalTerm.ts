export const translateMeteorologicalTerm = (termInEnglish: string) => {
  switch (termInEnglish) {
    case "Clouds":
      return "Nublado"
    case "Clear":
      return "Céu limpo"
    case "Rain":
      return "Chuva"
    case "Snow":
      return "Neve"
    case "light rain":
      return "Chuva fraca"
    case "moderate rain":
      return "Chuva moderada"
    case "heavy intensity rain":
      return "Chuva intensa"
    case "light snow":
      return "Neve fraca"
    case "moderate snow":
      return "Neve moderada"
    case "heavy snow":
      return "Neve intensa"
    case "light shower snow":
      return "Neve fraca com chuva"
    case "shower snow":
      return "Neve com chuva"
    case "heavy shower snow":
      return "Neve intensa com chuva"
    case "fog":
      return "Névoa"
    case "mist":
      return "Névoa"
    case "few clouds":
      return "Poucas nuvens"
    case "scattered clouds":
      return "Nuvens dispersas"
    case "broken clouds":
      return "Nuvens quebradas"
    case "overcast clouds":
      return "Nublado"
    case "shower rain":
      return "Chuva rápida"
    case "thunderstorm":
      return "Tempestade"
    default:
      return termInEnglish
  }
}
