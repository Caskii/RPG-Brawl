import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecToMinSecMilli'
})
export class MillisecToMinSecMilliPipe implements PipeTransform {

  transform(value: number): string {
      var minutes:number = Math.floor(value / 60000);
      var seconds:string = ((value % 60000) / 1000).toFixed(0);
      if(seconds=="60"){
        minutes++;
        seconds="00";
      }
      var millisec: string  = value.toString().slice(-3);
      return minutes+":"+seconds+":"+millisec;
  }

}
