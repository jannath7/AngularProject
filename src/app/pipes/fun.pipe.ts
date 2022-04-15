import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fun'
})
export class FunPipe implements PipeTransform {

  transform(target: string, filler: string ,times:number): unknown {

    let result=target
    for(let x=1;x<=times;x++)
     result+=" "+filler
     return result
  }
}
