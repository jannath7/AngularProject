import { ElementSchemaRegistry } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { feedback } from '../model/models';
@Pipe({
  name: 'feedfilter'
})
export class FeedfilterPipe implements PipeTransform {

  transform(flist:feedback[],type:string): any {
    if(type=="All")
    return flist;
    else
    return flist.filter((s:feedback)=>s.type===type)
  }

}
