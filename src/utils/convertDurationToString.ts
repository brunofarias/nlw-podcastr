export function convertDurationToString(duration: number): string {

  //Transforma segundos em hora (60 * 60) e arredonda para baixo
  const hours = Math.floor(duration / 3600); 

  //Transforma segundos em minutos (resto da divisão) e arredonda para baixo
  const minutes = Math.floor(duration % 3600 / 60); 

  //Resto da divisão dos segundos
  const seconds = duration % 60; 

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  return timeString;
}