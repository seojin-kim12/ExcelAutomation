// 엑셀 파일 불러오기
import * as GC from '@mescius/spread-sheets';
import setComboBox from './SetComboBox.jsx';
import setConditionalFormatting from './SetConditionalFormatting.jsx';
import SetTotalFormula from './SetTotalFormula.jsx';
import SetGradeFormula from './SetGradeFormula.jsx';

const ImportFile = (spread) => {
  let file = document.getElementById('fileDemo').files[0];
  if (!file) return;
  let fileType = file.name.split('.');

  const afterExcelImport = (spread) => {
    setComboBox(spread);
    setConditionalFormatting(spread);
    SetTotalFormula(spread);
    SetGradeFormula(spread);
  }

  // 파일 타입이 엑셀 타입인 경우에만 실행 
  if (fileType[fileType.length - 1] === 'xlsx') {
    // 엑셀 파일을 시트로 불러옴
    spread.import(
      file,
      function () {
        afterExcelImport(spread);
      },  // 성공 콜백
      function (e) {
        console.log(e); // 실패 : error 출력
      },
      {
        fileType: GC.Spread.Sheets.FileType.excel,
      }
    );
  }
};

export default ImportFile;