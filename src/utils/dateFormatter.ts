import { format, intervalToDuration } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';


export function timeElapsedDateFormatter(date: Date) {
  const duration = intervalToDuration({ start: date.getTime(), end: Date.now() })
  // const availableDateFormat = format(duration, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
  //   locale: ptBr
  // });
  return `Há ${duration.days} dia${duration.days! > 1 ? 's' : ''} `;
}