import { Pipe, PipeTransform } from '@angular/core';
import { format, utcToZonedTime } from 'date-fns-tz';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string ): string {
    const timeZone = 'GMT';
    const formatString = 'dd/MM/yyyy HH:mm:ss'
    const zonedDate = utcToZonedTime(new Date(value), timeZone);
    return format(zonedDate, formatString, { timeZone });
  }
}
