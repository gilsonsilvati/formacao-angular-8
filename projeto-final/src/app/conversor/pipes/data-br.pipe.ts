import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  /**
   * Aplica formatação para data.
   * 
   * @param string dataEm 
   * @return string data no formato dd/MM/yyyy
   */
  transform(dataEm: string): string {
    if (!dataEm) {
      return '';
    }

    const dataArr = dataEm.split('-');

    if (dataArr.length !== 3) {
      return dataEm;
    }

    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
  }

}
