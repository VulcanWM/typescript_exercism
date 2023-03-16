const planet_years: {[name: string]: number} = {"mercury": 0.2408467, "venus": 0.61519726, "earth": 1.0, "mars": 1.8808158, "jupiter": 11.862615, "saturn": 29.447498, "uranus": 84.016846, "neptune": 164.79132}

export function age(planet: string, seconds: number): unknown {
  let earth_years:number = seconds/31557600
  var planet_num:number = earth_years / planet_years[planet]
  planet_num = Math.round((planet_num + Number.EPSILON) * 100) / 100
  return planet_num
}
