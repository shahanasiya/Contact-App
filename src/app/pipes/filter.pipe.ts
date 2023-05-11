import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchKey:string,propertname:string): any[] {
    const result:any=[]
    if(!allContacts || searchKey==""  || propertname==""){
      return allContacts
    }
    allContacts.forEach((item:any)=>{
      if(item[propertname].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })

    return result;
  }

}
