// 변경한 파일 다운받기
import { saveAs } from 'file-saver';
import * as GC from '@mescius/spread-sheets';

const Export_Excel = (spread) => {
    let fileName = document.getElementById('exportFileName').value;

    // .xlsx 이름을 입력했다면 따로 추가 안 시켜줌
    if (fileName.substr(-5, 5) !== '.xlsx') {
      fileName += '.xlsx';
    }
    spread.export(
        // 이진 데이터의 집합인 blob을 실제 다운 가능한 엑셀 파일로 변경 및 다운
      function (blob) {
        saveAs(blob, fileName);
      },
      function (e) {
        console.log(e);
      },
      {
        // 파일 타입은 엑셀로 설정
        fileType: GC.Spread.Sheets.FileType.excel,
      }
    )
};

export default Export_Excel;